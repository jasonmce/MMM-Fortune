/* Magic Mirror
 * Module: MMM-Fortune
 *
 * By Mykle1
 * 
 */
Module.register("MMM-Fortune", {

    // Module config defaults.
    defaults: {
        updateInterval: 60 * 60 * 1000, // every hour
        fadeSpeed: 3000,
        initialLoadDelay: 1250, // ms seconds delay
        header: "Opening your fortune cookie!",
        maxWidth: "100%",
        color: "#62FF00",
        hideLuckyNumbers: false,
    },

    // Define required scripts.
    getScripts: function () {
        return ["moment.js"];
    },

    getStyles: function () {
        return ["MMM-Fortune.css", "font-awesome.css"];
    },

    start: function () {
        console.log("Starting module: " + this.name);
        moment.locale(config.language);
        this.scheduleUpdates();
    },

    getTemplate: function () {
        return "MMM-Fortune.njk";
    },

    getTemplateData: function () {
        return {
            emptyMessage: this.loaded ? null : "Telling your fortune...",
            fortune: this.fortune,
            luckyNumbers: this.luckyNumbers,
            color: this.config.color,
            maxWidth: this.config.maxWidth,
            header: this.config.header,
        };
    },

    // For voice control.
    notificationReceived: function (notification, payload) {
        if (notification === 'HIDE_FORTUNE') {
            this.hide(1000);
        }
        if (notification === 'SHOW_FORTUNE') {
            this.show(1000);
        }
    },

    // Process fortune data into module variables.
    processFortune: function (data) {
        this.fortune = data.text;
        this.luckyNumbers = this.config.hideLuckyNumbers
            ? null
            : data.numbers.split(',').sort(function (a, b) {
                return a - b
            });
        this.loaded = true;
    },

    // Set first and recurring refresh schedule.
    scheduleUpdates: function () {
        setTimeout(this.getFortune(), this.config.initialLoadDelay);

        setInterval(() => {
            this.getFortune();
        }, this.config.updateInterval);
    },

    // Message the helper to get new fortune values.
    getFortune: function () {
        this.sendSocketNotification('GET_FORTUNE');
    },

    // Handle fortune update response from helper.
    socketNotificationReceived: function (notification, payload) {
        if (notification === "FORTUNE_RESULT") {
            this.processFortune(payload);
            this.updateDom(this.config.fadeSpeed);
        }
    },

});

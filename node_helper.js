/* Magic Mirror
 * Module: MMM-Fortune
 *
 * By Mykle1
 * 
 */
const NodeHelper = require('node_helper');
const request = require('request');

module.exports = NodeHelper.create({

    start: function() {
        this.fortuneApiUrl = "https://api.viewbits.com/v1/fortunecookie?mode=random";
    },

    queryFortuneApi: function() {
        request({
            url: this.fortuneApiUrl,
            method: 'GET'
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                this.sendSocketNotification('FORTUNE_RESULT', result);
            }
        });
    },

    socketNotificationReceived: function(notification) {
        if (notification === 'GET_FORTUNE') {
            this.queryFortuneApi();
        }
    }

});

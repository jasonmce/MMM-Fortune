# MMM-Fortune
A [MagicMirror2](https://docs.magicmirror.builders) module that gives you free [Fortune Cookie fortunes](https://viewbits.com/docs/fortune-cookie-api-documentation).

## Examples

| Screenshot | Example image |
| --- | --- |
| Warmup message | ![Warmup message shown before first request says "telling your fortune"](readme-media/Warmup%20message.webp) |
| Fortune and numbers | ![Fortune and lucky numbers](readme-media/Fortune%20and%20numbers.webp) |
| Hide lucky numbers | ![Fortune without lucky numbers](readme-media/Hide%20lucky%20numbers.webp) |
| Alternate text color | ![Fortune with alternate text color](readme-media/Alternate%20color.webp) |


## Fortunes are fun!
Fortunes exactly as you would find them inside a Fortune Cookie. Words of wisdom first. Then a phrase in English, followed by the phrase in Chinese lettering and the pronunciation. Lastly, lucky lottery numbers ranging from 0 to 59, coninciding with US Powerball numbers. No one has ever won the Powerball using the numbers from a fortune cookie. Will you be the first?

## Info

* The .css file included helps you modify size and color of text.
* For best results in top_bar/bottom_bar/thirds set maxWidth: "100%" to stretch across your mirror and modify size and color of text in the css file.
* Need a color chart? No problem. http://htmlcolorcodes.com/color-picker/
* No API key is necessary at the moment.

## Installation

* `git clone https://github.com/jasonmce/MMM-Fortune.git` into the `~/MagicMirror/modules` directory.
* `cd MMM-Fortune`
* `npm install`

## Add to Config.js

    {
        module: "MMM-Fortune",
        position: "lower_third",
        config: {
            maxWidth: "100%",    
            header: ""
        }
    },

## Config Options

| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `maxWidth` | `100%` | Stretch across top_bar,bottom_bar, thirds. |
| `color` | `"#62FF00"` | Color of text. |
| `header` | `text` | I'm not a fan of headers but the option is yours. |
| `animationSpeed` | `3000` | The speed at which the new Fortune fades in ms. |
| `initialLoadDelay` | `1250` | Module load delay in ms. |
| `updateInterval` | `60*60*1000` | 1 hour. |
| `hideLuckyNumbers` | `false` | Do not hide lucky numbers. |

## Development

You can easily create a development environment for MMM-Fortune by spinning up a local MM2 server that includes MMM-Fortune and allows you to view the results in your browser.

To develop, run:
```bash
# Clone the MagicMirror server environment.
git clone https://github.com/MagicMirrorOrg/MagicMirror MMM-Fortune-dev
cd MMM-Fortune-dev/

# Clone the MMM-Fortune module and install dependencies
git clone git@github.com:jasonmce/MMM-Fortune.git modules/MMM-Fortune
npm install --prefix modules/MMM-Fortune

# Copy the sample config file and add the MMM-Fortune module
cp config/config.js.sample config/config.js
sed -i '/modules: \[/r modules/MMM-Fortune/config.MMM-Fortune.dev' config/config.js

# Install dependencies and start the server
npm install
node serveronly
```
and then go to http://localhost:8080 to see the results

## Thanks to

[<img src="https://docs.magicmirror.builders/logo.png" alt="ViewBits" style="height: 2rem;">](hhttps://docs.magicmirror.builders/) for the main application and development documentation.

[<img src="https://viewbits.com/wp-content/uploads/logo-text-viewbits.png" alt="ViewBits" style="height: 2rem;">](https://viewbits.com/docs/fortune-cookie-api-documentation) for the API

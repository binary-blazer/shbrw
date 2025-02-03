# Screenshot Browser (scb)

Screenshot Browser (scb) is a frameless CLI browser made for taking screenshots of websites. It provides both a CLI and an API for taking screenshots.

## Installation

To install the package, use npm:

```sh
npm install -g scb
```

## CLI Usage

To take a screenshot using the CLI, run the following command:

```sh
scb --url=<websiteUrl> [--resolution=WxH] [--optimized] [--noJS]
```

### CLI Options

- `--url`: The URL of the website to take a screenshot of.
- `--resolution`: The resolution of the screenshot in the format `WxH` (default: `1280x720`).
- `--optimized`: Optimize the screenshot for smaller file size.
- `--noJS`: Disable JavaScript on the website.

## API Usage

You can also use the API to take screenshots programmatically.

### Example

```js
import { takeScreenshot } from 'scb';

const url = 'https://example.com';
const options = {
    width: 1920,
    height: 1080,
    noJS: false
};

takeScreenshot(url, options)
    .then(buffer => {
        // Do something with the screenshot buffer
    })
    .catch(error => {
        console.error('Error taking screenshot:', error);
    });
```

### API Options

- `url`: The URL of the website to take a screenshot of.
- `options`: An object containing the following properties:
  - `width`: The width of the screenshot (default: `1280`).
  - `height`: The height of the screenshot (default: `720`).
  - `noJS`: Disable JavaScript on the website (default: `false`).

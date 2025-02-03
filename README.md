<div align="center">
  <picture>
      <img src="https://github.com/binary-blazer/shb/blob/master/assets/logo_rounded.png" width="15%">
  </picture>
  <h1>Screenshot Browser (shbrw)</h1>
  <p>Screenshot Browser (shbrw) is a frameless CLI browser designed for taking screenshots of websites. It provides both a CLI and an API for capturing screenshots.</p>

  <p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/shbrw">
    <img alt="" src="https://img.shields.io/npm/v/shbrw.svg?style=for-the-badge&labelColor=0e0a07">
  </a>
  <a aria-label="Size" href="https://www.npmjs.com/package/shbrw">
    <img alt="" src="https://img.shields.io/npm/unpacked-size/shbrw?style=for-the-badge&labelColor=0e0a07">
  </a>
  <a aria-label="NPM Downloads" href="https://www.npmjs.com/package/shbrw">
    <img alt="" src="https://img.shields.io/npm/dt/shbrw.svg?style=for-the-badge&labelColor=0e0a07">
  </a>
    <a aria-label="License" href="https://www.npmjs.com/package/shbrw">
    <img alt="" src="https://img.shields.io/npm/l/shbrw?style=for-the-badge&labelColor=0e0a07">
    </a>
</p>
</div>

## Installation

To install the package, use npm:

```bash
npm install -g shbrw
# or
yarn global add shbrw
# or
pnpm add -g shbrw
# or
bun install -g shbrw
```

## CLI Usage

To open a headless and frameless browser window, use the following command:

```bash
shbrw --url=<websiteUrl> [--size=WxH] [--optimized] [--noJS]
```

Then, right-click on the page and select "Take Screenshot" from the context menu.

<img src="https://github.com/binary-blazer/shb/blob/master/images/contextmenu.png" alt="Context menu" width="300">

### CLI Options

- `--url`: The URL of the website to open.
- `--size`: The size of the window in the format `WxH` (default: `1280x720`).
- `--optimized`: Run the website in optimized mode.
- `--noJS`: Disable JavaScript on the website.

## API Usage

You can also use the API to take screenshots programmatically.

### Example

```js
import { takeScreenshot } from 'shbrw';

const url = 'https://example.com';
const options = {
    width: 1920,
    height: 1080,
    x: 0,
    y: 0,
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
  - `x`: The x-coordinate of the screenshot (default: `0`).
  - `y`: The y-coordinate of the screenshot (default: `0`).
  - `noJS`: Disable JavaScript on the website (default: `false`).

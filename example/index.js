import { takeScreenshot } from 'scb';

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
        console.log('Screenshot taken successfully');
    })
    .catch(error => {
        console.error('Error taking screenshot:', error);
    });

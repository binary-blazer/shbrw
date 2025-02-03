import path from 'node:path';
import formatImagePath from './formatImagePath.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export const APP_NAME = 'scb';
export const FULL_APP_NAME = 'Screencapture Browser';
export const WINDOW_TITLE = 'Screencapture Browser';
export const WINDOW_ICON = formatImagePath(path.join(__dirname, '../assets/logo_rounded.png'));

export const WINDOW_SIZES = [
    { label: '1280x720 (720p)', width: 1280, height: 720 },
    { label: '1920x1080 (1080p)', width: 1920, height: 1080 },
    { label: '2560x1440 (1440p)', width: 2560, height: 1440 },
    { label: '3840x2160 (4K)', width: 3840, height: 2160 }
];
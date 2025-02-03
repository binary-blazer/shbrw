import { parseArgs } from "node:util";
import { app } from "electron";
import { APP_NAME } from "./constants.js";

export function parseCLIArgs(): { url: string; width: number; height: number; optimized: boolean; noJS: boolean } {
    const knownArgs: string[] = [];
    const electronArgs: string[] = [];
    
    process.argv.slice(2).forEach(arg => {
        if (arg.startsWith('--url=') || 
            arg.startsWith('--resolution=') ||
            arg === '--optimized' ||
            arg === '--noJS') {
            knownArgs.push(arg);
        } else {
            electronArgs.push(arg);
        }
    });

    const { values } = parseArgs({
        args: knownArgs,
        options: {
            resolution: { type: 'string' },
            optimized: { type: 'boolean' },
            noJS: { type: 'boolean' },
            url: { type: 'string' }
        },
        strict: false
    });
    
    if (!values.url) {
        console.error(`(${APP_NAME}) Usage: ${APP_NAME} --url=<websiteUrl> [--resolution=WxH] [--optimized] [--noJS]`);
        app.exit(1);
    }
    
    const [width, height] = (typeof values.resolution === 'string' ? values.resolution : '1280x720').split('x').map(Number);

    electronArgs.forEach(arg => {
        if (arg.startsWith('--')) {
            const [flag, value] = arg.slice(2).split('=');
            if (value) {
                app.commandLine.appendSwitch(flag, value);
            } else {
                app.commandLine.appendSwitch(flag);
            }
        }
    });
    
    return {
        url: typeof values.url === 'string' ? values.url : '',
        width,
        height,
        optimized: typeof values.optimized === 'boolean' ? values.optimized : false,
        noJS: typeof values.noJS === 'boolean' ? values.noJS : false
    };
}
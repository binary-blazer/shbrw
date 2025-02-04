import { app } from "electron";
import { startWindow } from "./startWindow.js";
import { parseCLIArgs } from "./parseCLIArgs.js";
import { APP_NAME } from "./constants.js";

app.whenReady().then(async () => {
    try {
        const options = parseCLIArgs();
        await startWindow(options.url, options);
    } catch (error) {
        console.error(`(${APP_NAME}) Error:\n${error}`);
        app.quit();
    }
});

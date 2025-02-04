import { WindowOptions } from "./types/index.js";
import { BrowserWindow } from "electron";

export async function takeScreenshot(
    url: string,
    options: WindowOptions,
): Promise<Buffer> {
    const win = new BrowserWindow({
        width: options.width || 1280,
        height: options.height || 720,
        x: options.x,
        y: options.y,
        show: false,
        webPreferences: {
            javascript: !options.noJS,
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    await win.loadURL(url);

    const image = await win.webContents.capturePage();
    win.close();

    return image.toPNG();
}

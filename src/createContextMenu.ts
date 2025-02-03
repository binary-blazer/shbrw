import { BrowserWindow, Menu, MenuItem, app, dialog, screen } from "electron";
import { WINDOW_SIZES, APP_NAME, FULL_APP_NAME } from "./constants.js";
import path from "node:path";
import fs from "node:fs";

export async function createContextMenu(win: BrowserWindow): Promise<Menu> {
    const menu = new Menu();
    
    menu.append(new MenuItem({ 
        label: 'Navigation',
        submenu: [
            { 
                label: 'Back', 
                click: () => win.webContents.navigationHistory.goBack(),
                enabled: win.webContents.navigationHistory?.canGoBack() || false
            },
            { 
                label: 'Forward', 
                click: () => win.webContents.navigationHistory.goForward(),
                enabled: win.webContents.navigationHistory?.canGoForward() || false
            },
            { 
                label: 'Reload', 
                click: () => win.webContents.reload() 
            }
        ]
    }));

    menu.append(new MenuItem({
        label: 'Window Size',
        submenu: WINDOW_SIZES.map(size => ({
            label: size.label,
            click: () => {
                const { width, height } = size;
                const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
                const x = Math.round((screenWidth - width) / 2);
                const y = Math.round((screenHeight - height) / 2);
                win.setBounds({ width, height, x, y });
            }
        }))
    }));

    menu.append(new MenuItem({
        label: 'Take Screenshot',
        click: async () => {
            const image = await win.webContents.capturePage();
            const screenshotsDir = path.join(app.getPath('pictures'), FULL_APP_NAME);
            if (!fs.existsSync(screenshotsDir)) {
                fs.mkdirSync(screenshotsDir);
            }
            const fileName = `screenshot-${Date.now()}.png`;
            const filePath = path.join(screenshotsDir, fileName);
            fs.writeFile(filePath, image.toPNG(), (err) => {
                if (err) {
                    console.error(`(${APP_NAME}) Failed to save screenshot:`, err);
                } else {
                    dialog.showMessageBox(win, {
                        type: 'info',
                        title: 'Screenshot Saved',
                        message: `Screenshot saved as ${fileName}`,
                        buttons: ['OK']
                    });
                    console.log(`(${APP_NAME}) Screenshot saved as ${fileName}`);
                }
            });
        }
    }));

    menu.append(new MenuItem({ type: 'separator' }));
    
    menu.append(new MenuItem({
        label: 'Quit',
        click: () => app.quit()
    }));

    return menu;
}
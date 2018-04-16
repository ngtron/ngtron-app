import {app, BrowserWindow, screen} from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as process from 'process';
import * as ElectronReload from 'electron-reload';
import {Server} from './server';

export class Main {
    public win: Electron.BrowserWindow;
    public server: Server;

    constructor() {
        ElectronReload(__dirname, {
            electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron')
        });
        app.on('ready', this.createWindow);
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });
        app.on('activate', () => {
            if (this.win == null) {
                this.createWindow();
            }
        });

        this.server = new Server();
        this.server.startServices();
    }

    createWindow() {
        this.win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                defaultEncoding: 'UTF-8'
            }
        });
        this.win.setMenuBarVisibility(false);
        this.win.on('closed', () => {
            app.quit();
            this.win = null;
        });
        this.win.webContents.openDevTools();
        this.win.loadURL(url.format({
            pathname: path.join(__dirname, 'app', 'index.html'),
            protocol: 'file:',
            slashes: true
        }));

        const allScreens = screen.getAllDisplays();
        let x = 0;
        let y = 0;
        let width = 0;
        let height = 0;
        for (const _screen in allScreens) {
            if (allScreens[_screen].workArea.width > width) {
                x = allScreens[_screen].bounds.x;
                y = allScreens[_screen].bounds.y;
                width = allScreens[_screen].bounds.width;
                height = allScreens[_screen].bounds.height;
            }
        }
        this.win.setPosition(x, y, true);
        this.win.setSize(width, height, true);
    }
}

const main = new Main();

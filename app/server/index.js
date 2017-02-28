const { app, BrowserWindow } = require('electron');
const pug = require('electron-pug')({ pretty: true }, {});
const path = require('path');
const url = require('url');

/**
 * @type {Electron.BrowserWindow} win The main window
 */
let win;

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL(`file://${__dirname}/../client/views/index.pug`);
    // win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
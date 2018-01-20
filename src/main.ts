import { app, BrowserWindow } from 'electron';

declare let __dirname: string;

let mainWindow: Electron.BrowserWindow;

function onReady() {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });

  const fileName = `file://${__dirname}/index.html`;
  mainWindow.loadURL(fileName);
  mainWindow.on('close', () => app.quit());
}

app.on('ready', () => onReady());
app.on('window-all-closed', () => app.quit());
console.log(`Electron Version ${app.getVersion()}`);  // tslint:disable-line
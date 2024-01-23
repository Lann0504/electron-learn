/*
 * @Author: Lann
 * @Date: 2024-01-23 10:56:15
 * @LastEditors: Lann
 * @LastEditTime: 2024-01-23 11:32:11
 * @Description: 
 */
const { BrowserWindow, app } = require('electron')
app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    alwaysOnTop: true
  })
  mainWindow.loadURL('https://github.com')
})

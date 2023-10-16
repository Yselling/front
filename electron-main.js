const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const express = require("express");
const cors = require("cors");
const localServerApp = express();
const PORT = 8088;

const startLocalServer = (done) => {
    localServerApp.use(express.json({ limit: "100mb" }));
    localServerApp.use(cors());
    localServerApp.use(express.static('./build'));
    localServerApp.listen(PORT, async () => {
        console.log("Server Started on PORT ", PORT);
        done();
    });
};

if (process.env.NODE_ENV !== "production") {
    require("electron-reload")(__dirname, {
        electron: require(`${__dirname}/node_modules/electron`),
    });
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    mainWindow.loadURL("http://localhost:" + PORT);

    const menuTemplate = [
        {
            label: "File",
            submenu: [
                { role: "quit" }
            ]
        },
        // Ajoutez d'autres menus au besoin
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    // mainWindow.webContents.openDevTools();

    app.on("before-quit", () => {
        // Effectuer des opérations de nettoyage si nécessaire
    });
};

app.whenReady().then(() => {
    startLocalServer(createWindow);

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

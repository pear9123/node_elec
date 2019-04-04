const {BrowserWindow} = require('electron');
exports.openWindow = (filename) => {
    let win = new BrowserWindow(
        {
            width : 500
            , minWidth:230
            , height :400
            , minHeight: 350
            , icon: __dirname + '/resources/installer/Icon.ico'
            , webPreferences :{ defaultFontSize : 14}
        }
    );
    win.loadURL(`file://${__dirname}/${filename}.html`);
}
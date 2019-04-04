// app모듈과, BrowserWindow 모듈 할당
const {app, BrowserWindow, Menu, ipcMain} = require('electron');
const appMenu = require('./menu.js');


app.on('ready', () =>{
    win = new BrowserWindow(
        {
            width : 1050
            , minWidth:1050
            , height :550
            , minHeight: 450
            , show: false
            , icon: __dirname + '/resources/installer/Icon.ico'
            , webPreferences :{ defaultFontSize : 14}
            , frame: false
            
        }
    );

    // 창이 ready 상태가되면 보여주기
    win.once('ready-to-show', function(){
        win.show();
    });

  // 윈도우 창에 로드 할 html 페이지
  win.loadURL(`file://${__dirname}/index.html`); //작은 따옴표가 아닌  back stick 기호(tab키 위)

  //개발자 도구 오픈
  //win.webContents.openDevTools();
  //메뉴 설정
  //Menu.setApplicationMenu(appMenu);
  Menu.setApplicationMenu(null);

  ipcMain.on('sendMsg',(event, args) =>{
      //최대인지 확인후 최대화 또는 최대화 취소
      win.isMaximized() ? win.unmaximize() : win.maximize();
      event.sender.send('mainMsg', 'MainProcess에서 신호보냄');
  });
});

interface Window {
  Telegram: {
    WebView: {};
    WebApp: {
      ready: Function;
      sendData: Function;
      expand: Function;
      openLink: Function;
      openTelegramLink: Function;
      close: Function;
    },
    Utils: {};
  }
}
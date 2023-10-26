"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from 'antd';

export default function Sign() {

  const [tgData, setTgData] = useState({});

  useEffect(() => {
    console.log(window.Telegram)
  }, [])

  const getTgConfig = () => {
    setTgData(window.Telegram.WebApp);
    // window.Telegram.WebApp.ready((res:any) => {
    //   window.Telegram.WebApp.sendData({

    //   })
    // })
  }

  const expandApp = () => {
    window.Telegram.WebApp.expand();
    // document.documentElement.style.setProperty('--tg-viewport-height', '100px');
    // window.Telegram.WebApp.expand();
    // setTimeout(() => {
    //   // window.Telegram.WebApp.showAlert(`页面高度$}`)
    // }, 500)
  }

  const openAwaken = () => {
    window.Telegram.WebApp.openLink('https://www.awaken.finance/trading');
  }

  const openBeangotown = () => {
    window.Telegram.WebApp.openTelegramLink('t.me/xiaoshitouGameBot/xiaoshitou_test_bg');
  }

  const close = () => {
    window.Telegram.WebApp.close();
  }

  return (
    <div>
      <h1>TG SDK</h1>
      <Button type='primary' onClick={getTgConfig}>获取 TG 配置</Button>
      <Button type='primary' onClick={expandApp}>扩大小程序</Button>
      <br />
      {JSON.stringify(tgData)}
      <br />
      <Button type='primary' onClick={openAwaken}>在浏览器中打开Awaken</Button>
      <Button type='primary' onClick={openBeangotown}>打开beangotown</Button>
      <Button type='primary' onClick={close}>关闭小程序</Button>
    </div>
    
    
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from 'antd';

export default function Sign() {

  const [tgData, setTgData] = useState({});
  const [tgReadyData, setTgReadyData] = useState({});

  useEffect(() => {
    console.log(window.Telegram)
  }, [])

  const getTgConfig = () => {
    setTgData(window.Telegram);
    window.Telegram.WebApp.ready((res:any) => {
      window.Telegram.WebApp.sendData({

      })
    })
  }

  const expandApp = () => {
    // window.Telegram.WebApp.expand();
    document.documentElement.style.setProperty('--tg-viewport-height', '100px');
    // window.Telegram.WebApp.expand();
    // setTimeout(() => {
    //   // window.Telegram.WebApp.showAlert(`页面高度$}`)
    // }, 500)
  }

  return (
    <div>
      <h1>TG SDK</h1>
      <Button onClick={getTgConfig}>获取 TG 配置</Button>
      <Button onClick={expandApp}>扩大</Button>
      <br />
      {JSON.stringify(tgData)}
      <br />
      <h1>
        TG ready 数据
      </h1>
    </div>
    
    
  );
}

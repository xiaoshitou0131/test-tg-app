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
      console.log('res:', res)
      setTgReadyData(res);
    })
  }

  return (
    <div>
      <h1>TG SDK</h1>
      <Button onClick={getTgConfig}>获取 TG 配置</Button>
      <br />
      {JSON.stringify(tgData)}
      <br />
      <h1>
        TG ready 数据
      </h1>
      <p>
        {JSON.stringify(tgReadyData)}
      </p>
    </div>
    
    
  );
}

"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, Divider } from 'antd';
import axios from "axios";

export default function Sign() {
  const [tgData, setTgData] = useState({});
  // const [userAgent, setUserAgent] = useState('');
  const [location, setLocation] = useState({});

  useEffect(() => {
    // setUserAgent(window.navigator.userAgent);
    console.log(JSON.stringify(window.location, null, 4));
    setLocation(window.location);
  }, []);

  const getTgConfig = () => {
    setTgData(window.Telegram.WebApp);
  };

  const expandApp = () => {
    window.Telegram.WebApp.expand();
  };

  const openAwaken = () => {
    window.Telegram.WebApp.openLink("https://www.awaken.finance/trading");
  };

  const openBeangotown = () => {
    window.Telegram.WebApp.openTelegramLink(
      "https://t.me/xiaoshitouGameBot/xiaoshitou_test_bg"
    );
  };

  const close = () => {
    window.Telegram.WebApp.close();
  };

  const jsonStr = useMemo(() => JSON.stringify(location, null, 2), [location]);

  return (
    <div>
      <h1>TG SDK</h1>
      <Button type="primary" onClick={getTgConfig}>
        获取 TG 配置
      </Button>
      <Button type="primary" onClick={expandApp}>
        扩大小程序（仅移动端生效）
      </Button>

      {JSON.stringify(tgData)}
      <Divider />
      <Button type="primary" onClick={openAwaken}>
        在浏览器中打开Awaken
      </Button>
      <Button type="primary" onClick={openBeangotown}>
        打开beangotown
      </Button>
      <Divider />
      <Button type="primary" onClick={close}>
        关闭小程序
      </Button>
      <Button type="primary">打开弹窗</Button>
      <Divider />
      <h1>location</h1>
      <p>{jsonStr}</p>
    </div>
  );
}

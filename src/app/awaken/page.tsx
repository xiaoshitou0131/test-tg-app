"use client";
import React, { useMemo } from "react";
import { Button } from "antd";
import { useSearchParams, useParams } from "next/navigation";
import { useAsync } from "react-use";
import axios from "axios";

export default function Sign() {
  const searchParams: any = useSearchParams();
  const logininfo = searchParams.get("tgWebAppStartParam");

  const status = useAsync(async () => {
    if (!logininfo) {
      return;
    }
    const obj: any = {};
    searchParams
      .get("tgWebAppStartParam")
      .split("_")
      .forEach((item: any) => {
        const [key, value] = item.split("-");
        obj[key] = value;
      });

    console.log("searchParams: ", obj);

    const response: any = await axios.post(
      "https://test-tg-server.vercel.app/tg/auth/token",
      {
        userId: obj.userId,
      }
    );

    return (
      <>
        <h3>用户信息</h3>
        <br />
        <span>userId: {obj.userId}</span>
        <br />
        <span>accessToekn: {obj.accessToken}</span>
        <br />
        <h3>登录结果</h3>
        <br />
        <span>{response.data.loginStatus}</span>
      </>
    );
  }, [logininfo]);

  const doLogin = () => {
    const obj = { userId: "12345678" };

    const str = Object.entries(obj).reduce((pre, item) => {
      if (!pre) {
        return `${item[0]}-${item[1]}`;
      }
      return `${pre}_${item[0]}-${item[1]}`;
    }, "");

    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/xiaoshitouGameBot/xiaoshitou_test_bg?startapp=${str}`
    );
  };

  return (
    <>
      <h1>Awaken 小程序</h1>

      <Button type="primary" size="large" onClick={doLogin}>
        portKey 登录
      </Button>

      <hr />
      {status.value}
    </>
  );
}

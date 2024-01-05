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
    const data: any = JSON.parse(decodeURIComponent(logininfo));

    const response: any = await axios.post("/tg/auth/token", {
      userId: "12345678",
    });

    return (
      <>
        <h3>用户信息</h3>
        <br />
        <span>userId: {data.userId}</span>
        <br />
        <span>accessToekn: {data.accessToken}</span>
        <br />
        <h3>登录结果</h3>
        <br />
        <span>{response.data.loginStatus}</span>
      </>
    );
  }, [logininfo]);

  const doLogin = () => {
    // const params = JSON.parse(
    //   decodeURIComponent(
    //     decodeURIComponent(location.hash.split("#")[1])
    //       .split("&")[0]
    //       .split("=")[2]
    //   )
    // );

    // location.href = `http://192.168.11.139:3001/portkey?tgWebAppStartParam=${encodeURIComponent(
    //   JSON.stringify({ userId: params.id })
    // )}`;

    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/xiaoshitouGameBot/xiaoshitou_test_bg?startapp=${encodeURIComponent(
        JSON.stringify({ userId: "12345678" })
      )}`
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

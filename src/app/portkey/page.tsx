"use client";
import React, { useMemo } from "react";
import { Button } from "antd";
import { useSearchParams, useParams } from "next/navigation";
import { useAsync } from "react-use";
import axios from "axios";

export default function Sign() {
  const searchParams: any = useSearchParams();

  const userInfo = useMemo(() => {
    if (!searchParams.get("tgWebAppStartParam")) {
      return null;
    }

    const data: any = JSON.parse(
      decodeURIComponent(searchParams.get("tgWebAppStartParam"))
    );

    console.log("searchParams: ", data);

    return (
      <>
        <h3>用户信息</h3>
        <br />
        <span>userId: {data.userId}</span>
      </>
    );
  }, [searchParams]);

  const doLogin = async () => {
    const data: any = JSON.parse(
      decodeURIComponent(searchParams.get("tgWebAppStartParam"))
    );

    const res: any = await axios.get("/tg/getAccessToken", {
      params: data,
    });

    console.log("res: ", res.data);

    // location.href = `http://192.168.11.139:3001/awaken?tgWebAppStartParam=${encodeURIComponent(
    //   JSON.stringify(res.data)
    // )}`;

    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/xiaoshitou_test_bot/xiaoshitou_test_app?startapp=${encodeURIComponent(
        JSON.stringify(res)
      )}`
    );
  };

  return (
    <>
      <h1>PortKet 小程序</h1>
      <Button
        type="primary"
        size="large"
        onClick={doLogin}
        disabled={!userInfo}
      >
        授权登录
      </Button>

      <hr />
      {userInfo}
    </>
  );
}

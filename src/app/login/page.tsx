"use client";
import React from "react";
import { Button, Divider } from "antd";
import { useRouter } from "next/navigation";

export default function Sign() {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.push("/login/getCode/x")} type="primary">
        X（推特） 登录
      </Button>
      <Divider />
      <Button
        onClick={() => router.push("/login/getCode/facebook")}
        type="primary"
      >
        Facebook 登录
      </Button>
      <Divider />
      <Button
        onClick={() => router.push("/login/getCode/twitch")}
        type="primary"
      >
        Twitch 登录
      </Button>
      <Divider />
      <Button
        onClick={() => router.push("/login/getCode/discord")}
        type="primary"
      >
        Discord 登录
      </Button>
      <Divider />
      <Button
        onClick={() => router.push("/login/getCode/reddit")}
        type="primary"
      >
        Reddit 登录
      </Button>
      <Divider />
      <Button onClick={() => router.push("/login/getCode/line")} type="primary">
        Line 登录
      </Button>
      <Divider />
      <Button
        onClick={() => router.push("/login/getCode/kakaoTalk")}
        type="primary"
      >
        KakaoTalk 登录
      </Button>
      <Divider />
      <Button
        onClick={() => router.push("/login/getCode/tiktok")}
        type="primary"
      >
        Tiktok 登录
      </Button>
    </div>
  );
}

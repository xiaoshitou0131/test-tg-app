"use client";
import React from "react";
import { Button, Divider } from "antd";
import { useRouter } from "next/navigation";

export default function Sign() {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.push("/login/getCode/X")} type="primary">
        推特登录
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
        onClick={() => router.push("/login/getCode/Twitch")}
        type="primary"
      >
        Twitch 登录
      </Button>
    </div>
  );
}

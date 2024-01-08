"use client";
import React from "react";
import { Button } from "antd";
import axios from "axios";

export default function Sign() {
  const doLogin = () => {
    axios.get("https://test-tg-server.vercel.app/login/X");
  };
  return (
    <div>
      <Button onClick={doLogin} type="primary">
        推特登录
      </Button>
    </div>
  );
}

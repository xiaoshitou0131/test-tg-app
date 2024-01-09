"use client";
import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Sign() {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push("/login/X")} type="primary">
        推特登录
      </Button>
    </div>
  );
}

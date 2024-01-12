"use client";
import React, { useMemo } from "react";
import { Button, Col, Divider, Row } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

const loginList = [
  {
    key: "x",
    name: "X（推特）",
  },
  {
    key: "facebook",
    name: "Facebook",
  },
  {
    key: "twitch",
    name: "Twitch",
  },
  {
    key: "discord",
    name: "Discord",
  },
  {
    key: "reddit",
    name: "Reddit",
  },
  {
    key: "line",
    name: "Line",
  },
  {
    key: "kakaoTalk",
    name: "KakaoTalk",
  },
  {
    key: "tiktok",
    name: "Tiktok",
  },
];

export default function Sign() {
  const router = useRouter();
  const search = useSearchParams();

  const [loginType, accessToken, status, refreshToken, tokenType] =
    useMemo(() => {
      return [
        search.get("loginType"),
        search.get("accessToken"),
        search.get("status"),
        search.get("refreshToken"),
        search.get("tokenType"),
      ];
    }, [search]);

  return loginList.map(({ key, name }) => (
    <div key={key}>
      <Divider />
      <Row align="middle">
        <Col span={3}>
          <Button
            onClick={() => {
              console.log(`/login/getCode/${key}`);
              // router.push(`/login/getCode/${key}`);
              router.push(`/login/getCode/x`);
            }}
            type="primary"
          >
            {name} 登录
          </Button>
          <Divider />
          <Button
            onClick={() => router.push(`/login/refreshToken/${key}`)}
            type="primary"
            disabled={!(loginType === key && accessToken)}
          >
            {name} 刷新token
          </Button>
        </Col>
        <Col flex={1}>
          {loginType === key && `login status: ${status}`}
          <br />
          {loginType === key && `accessToken：${accessToken}`}
          <br />
          {loginType === key && `refreshToken: ${refreshToken}`}
          <br />
          {loginType === key && `tokenType: ${tokenType}`}
        </Col>
      </Row>
    </div>
  ));
}

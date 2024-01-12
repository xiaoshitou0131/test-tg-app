"use client";
import React, { useMemo } from "react";
import { Button, Col, Divider, Row } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

const loginList = [
  {
    key: "x",
    name: "推特",
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

  return useMemo(
    () =>
      loginList.map(({ key, name }) => (
        <div key={key}>
          <Divider />
          <Row align="middle">
            <Col span={3}>
              <Button
                onClick={() => {
                  console.log(`/login/getCode/${key}`);
                  router.push(`/login/getCode/${key}`);
                }}
                type="primary"
              >
                {name} 登录
              </Button>
              <Divider />
              <Button
                onClick={() => router.push(`/login/refreshToken/${key}`)}
                type="primary"
                disabled={
                  !(
                    search.get("loginType") === key && search.get("accessToken")
                  )
                }
              >
                {name} 刷新token
              </Button>
            </Col>
            {search.get("loginType") === key && (
              <Col flex={1}>
                login status: {search.get("status")}
                <hr />
                tokenType: ${search.get("tokenType")}
                <hr />
                accessToken: {search.get("accessToken")}
                <hr />
                refreshToken: {search.get("refreshToken")}
              </Col>
            )}
          </Row>
        </div>
      )),
    [router, search]
  );
}

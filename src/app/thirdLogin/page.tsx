"use client";
import React, { useCallback, useMemo } from "react";
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

  const rediriect = useCallback(
    (key: string) => router.push(`/login/getCode/${key}`),
    [router]
  );

  const refresh = useCallback(
    (key: string) => router.push(`/login/refreshToken/${key}`),
    [router]
  );

  return useMemo(
    () =>
      loginList.map(({ key, name }) => (
        <div key={key}>
          <Divider />
          <Row align="middle">
            <Col span={3}>
              <Button onClick={() => rediriect(key)} type="primary">
                {name} 登录
              </Button>
              <Divider />
              <Button
                onClick={() => refresh(key)}
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
    [rediriect, refresh, search]
  );
}

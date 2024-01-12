"use client";
import React, { useMemo } from "react";
import { Button, Col, Divider, Row } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

export default function Sign() {
  const router = useRouter();
  const search = useSearchParams();

  const [loginType, accessToken] = useMemo(() => {
    return [search.get("loginType"), search.get("accessToken")];
  }, [search]);

  return (
    <div>
      <Divider />
      <Row>
        <Col span={3}>
          <Button
            onClick={() => router.push("/login/getCode/x")}
            type="primary"
          >
            X（推特） 登录
          </Button>
        </Col>
        <Col flex={1}>{loginType === "x" && accessToken}</Col>
      </Row>

      <Divider />
      <Row>
        <Col span={3}>
          <Button
            onClick={() => router.push("/login/getCode/facebook")}
            type="primary"
          >
            Facebook 登录
          </Button>
        </Col>
        <Col flex={1}>{loginType === "facebook" && accessToken}</Col>
      </Row>

      <Divider />
      <Row>
        <Col span={3}>
          <Button
            onClick={() => router.push("/login/getCode/twitch")}
            type="primary"
          >
            Twitch 登录
          </Button>
        </Col>
        <Col flex={1}>{loginType === "twitch" && accessToken}</Col>
      </Row>

      <Divider />
      <Row>
        <Col span={3}>
          <Button
            onClick={() => router.push("/login/getCode/discord")}
            type="primary"
          >
            Discord 登录
          </Button>
        </Col>
        <Col flex={1}>{loginType === "discord" && accessToken}</Col>
      </Row>

      <Divider />
      <Row>
        <Col span={3}>
          <Button
            onClick={() => router.push("/login/getCode/reddit")}
            type="primary"
          >
            Reddit 登录
          </Button>
        </Col>
        <Col flex={1}>{loginType === "reddit" && accessToken}</Col>
      </Row>

      <Divider />
      <Row>
        <Col span={3}>
          <Button
            onClick={() => router.push("/login/getCode/line")}
            type="primary"
          >
            Line 登录
          </Button>
        </Col>
        <Col flex={1}>{loginType === "line" && accessToken}</Col>
      </Row>

      <Divider />
      <Row>
        <Col span={3}>
          <Button
            onClick={() => router.push("/login/getCode/kakaoTalk")}
            type="primary"
          >
            KakaoTalk 登录
          </Button>
        </Col>
        <Col flex={1}>{loginType === "kakaoTalk" && accessToken}</Col>
      </Row>

      <Divider />
      <Row>
        <Col span={3}>
          <Button
            onClick={() => router.push("/login/getCode/tiktok")}
            type="primary"
          >
            Tiktok 登录
          </Button>
        </Col>
        <Col flex={1}>{loginType === "tiktok" && accessToken}</Col>
      </Row>
    </div>
  );
}

"use client";
import React, { useCallback, useEffect } from "react";

export default function Sign() {
  const receiveMessage = useCallback((event: any) => {
    console.log(event, "event===");
  }, []);

  useEffect(() => {
    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, [receiveMessage]);

  return (
    <div>
      <h1>三方登录</h1>

      <iframe
        src="https://openlogin.portkey.finance/recaptcha?siteKey=6LfR_bElAAAAAJSOBuxle4dCFaciuu9zfxRQfQC0"
        width="400"
        height="600"
      ></iframe>
    </div>
  );
}

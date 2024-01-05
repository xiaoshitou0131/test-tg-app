
'use client'
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          src="https://telegram.org/js/telegram-widget.js?14"
          data-telegram-login="xiaoshitou_test_bot"
          data-size="large"
          data-onauth="onTelegramAuth(user)"
          data-request-access="write"
        ></Script>
        <Script strategy="lazyOnload" id="login-telegram">
          {`function onTelegramAuth(user) { console.log('login response :', user)}`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

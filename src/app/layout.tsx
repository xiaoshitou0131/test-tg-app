
'use client'
import './globals.css';
// import type { Metadata } from 'next';
import Script from 'next/script'
import { Inter } from 'next/font/google';
import AntdRegistry from '../components/AntdRegistry';
import VConsole from 'vconsole';



const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js"/>
        <Script strategy="lazyOnload" src="https://telegram.org/js/telegram-widget.js?14" data-telegram-login="xiaoshitou_test_bot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></Script>
        <Script strategy="lazyOnload" id="login-telegram">
          {`function onTelegramAuth(user) { console.log('login response :', user)}`}
        </Script>

        <Script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="xiaoshitou_test_bot" data-size="small" data-auth-url="https://test-tg-app.vercel.app/" data-request-access="write"></Script>
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  )
}

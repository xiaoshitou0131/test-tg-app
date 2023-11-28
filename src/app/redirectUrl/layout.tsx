
'use client'
import Script from 'next/script'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="xiaoshitou_test_bot" data-size="large" data-auth-url="https://test-tg-server.vercel.app/auth/callback" data-request-access="write"></Script>
      </head>
      <body className={inter.className}>
      </body>
    </html>
  )
}

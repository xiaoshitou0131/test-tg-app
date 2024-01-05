let rewrite = [];

if (process.env.NEXT_PUBLIC_APP_ENV === "prod") {
  rewrite = [
    {
      source: "/:path*",
      destination: "https://test-tg-server.vercel.app/:path*",
    },
  ];
} else {
  rewrite = [
    {
      source: "/:path*",
      destination: "http://192.168.11.139:6666/:path*",
    },
  ];
}

module.exports = rewrite;

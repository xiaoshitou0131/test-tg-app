let rewrite = [];

if (process.env.NEXT_PUBLIC_APP_ENV === "prod") {
  rewrite = [
    {
      source: "/login/X",
      destination: "https://test-tg-server.vercel.app/login/X",
    },
  ];
} else {
  rewrite = [
    {
      source: "/login/X",
      destination: "http://192.168.11.149:6666/login/X",
    },
  ];
}

module.exports = rewrite;

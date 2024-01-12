let redirect = [];

if (process.env.NEXT_PUBLIC_APP_ENV === "prod") {
  redirect = [
    {
      source: "/login/getCode/:path*",
      destination: "https://test-tg-server.vercel.app/login/getCode/:path*",
      permanent: true,
    },
  ];
} else {
  redirect = [
    {
      source: "/login/getCode/:path*",
      destination: "http://localhost:8888/login/getCode/:path*",
      permanent: true,
    },
  ];
}

module.exports = redirect;

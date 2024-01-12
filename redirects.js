let redirect = [];

if (process.env.NEXT_PUBLIC_APP_ENV === "prod") {
  redirect = [
    {
      source: "/login/getCode/:path*",
      destination: "https://test-tg-server.vercel.app/login/getCode/:path*",
      permanent: true,
    },
    {
      source: "/login/refreshToken/:path*",
      destination:
        "https://test-tg-server.vercel.app/login/refreshToken/:path*",
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
    {
      source: "/login/refreshToken/:path*",
      destination: "http://localhost:8888/login/refreshToken/:path*",
      permanent: true,
    },
  ];
}

module.exports = redirect;

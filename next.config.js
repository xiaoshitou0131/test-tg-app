const redirects = require("./redirects");

/** @type {import('next').NextConfig} */
const nextConfig = {
  consoleLog: true,
  crossOrigin: "anonymous",
  async redirects() {
    return redirects;
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;

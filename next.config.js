const rewrites = require("./rewrites");

/** @type {import('next').NextConfig} */
const nextConfig = {
  consoleLog: true,
  crossOrigin: "anonymous",
  async rewrites() {
    return rewrites;
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;

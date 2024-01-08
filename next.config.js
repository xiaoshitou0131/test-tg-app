const rewrites = require("./rewrites");

/** @type {import('next').NextConfig} */
const nextConfig = {
  consoleLog: true,
  crossOrigin: "anonymous",
  async rewrites() {
    console.log("rewrites: ", rewrites);
    return rewrites;
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;

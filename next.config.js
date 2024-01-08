const rewrites = require("./rewrites");
const redirects = require("./redirects");

/** @type {import('next').NextConfig} */
const nextConfig = {
  consoleLog: true,
  crossOrigin: "anonymous",
  // async rewrites() {
  //   console.log("rewrites: ", rewrites);
  //   return rewrites;
  // },
  async redirects() {
    return redirects;
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;

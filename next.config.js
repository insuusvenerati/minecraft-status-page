const withTM = require("next-transpile-modules")(["@material-tailwind/react"]);
const withPWA = require("next-pwa");

module.exports = withPWA(
  withTM({
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    },
    images: {
      domains: ["crafatar.com"],
    },
    experimental: {
      outputStandalone: true,
    },
    reactStrictMode: true,
  })
);

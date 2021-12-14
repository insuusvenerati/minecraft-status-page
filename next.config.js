const withTM = require("next-transpile-modules")(["@material-tailwind/react"]);

module.exports = withTM({
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
});

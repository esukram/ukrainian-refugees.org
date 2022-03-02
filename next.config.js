/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // leaving out UA for now, due to lack of translations available
    locales: ["de", "en"],
    defaultLocale: "en",
  },
  distDir: "out",
};

module.exports = nextConfig;

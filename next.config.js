
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

module.exports = withPWA({
//   reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
 
});

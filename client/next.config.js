module.exports = {
  images: {
    deviceSizes: [1920, 1600, 1280, 960],
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader",
      }
    );
    return config;
  },

  trailingSlash: true,
};

// i18n: {
//   locales: ["fa-IR", "en-US", "ar-AR"],
//   defaultLocale: "fa-IR",
// },

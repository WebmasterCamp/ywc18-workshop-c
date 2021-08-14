const CracoLessPlugin = require("craco-less");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@layout-header-background": "#FFFFFF",
              "@layout-body-background": "#FAFAFA",
              "@progress-default-color": "#F05D5D",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

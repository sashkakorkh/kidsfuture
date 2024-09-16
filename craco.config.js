// eslint-disable-next-line import/no-extraneous-dependencies
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // eslint-disable-next-line no-param-reassign
      webpackConfig.optimization.minimize = true;
      webpackConfig.optimization.minimizer.push(
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [['imagemin-pngquant', { quality: [0.85, 0.95] }]],
            },
          },
          generator: [
            {
              preset: 'webp',
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: {
                plugins: ['imagemin-webp'],
              },
            },
          ],
        })
      );
      // eslint-disable-next-line no-param-reassign
      webpackConfig.module.rules[1].oneOf[1] = {
        test: /\.(jpe?g|png|webp)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            // eslint-disable-next-line global-require
            adapter: require('responsive-loader/sharp'),
            sizes: [360, 768, 1200, 1600],
          },
        },
      };
      return webpackConfig;
    },
  },
};

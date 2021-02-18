const path = require('path');

module.exports = {
  'stories': [
    '../src/**/*.stories.@(js|jsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
      exclude: /node_modules/,
    });
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ],
      include: path.resolve(__dirname, '../')
    });
    config.module.rules.push({
      test: /\.(html|cshtml|scriban)$/,
      use: [
        'html-loader'
      ],
      include: path.resolve(__dirname, '../')
    });
    return config;
  },
}

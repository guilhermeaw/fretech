module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@routes': './src/routes',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};

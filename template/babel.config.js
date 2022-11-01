module.exports = api => {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@app': './app',
            '@navigators': './app/navigators',
            '@components': './app/components',
            '@screens': './app/screens',
            '@theme': './app/theme',
            '@utils': './app/utils',
            '@proxies': './app/proxies',
            '@assets': './assets',
            '@api': './app/services/api',
            '@services': './app/services',
          },
        },
      ],
    ],
  }
}

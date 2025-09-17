module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-worklets/plugin', // ✅ Reanimated v3+ ke liye ye zaroori hai
    ],
  };
};

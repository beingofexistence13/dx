module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["tailwindcss-react-native/babel"],
    plugins: ["nativewind/babel"],
    plugins: ['react-native-reanimated/plugin'],    
    
  };
};

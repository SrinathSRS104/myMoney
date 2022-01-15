module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./app"],
        extensions: [".js", ".ios.js", ".android.js"],
      },
    ],
    ["@babel/plugin-syntax-class-properties"],
  ],
};

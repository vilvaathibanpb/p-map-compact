module.exports = function configureBabel(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "12.13.0",
        },
        modules: "cjs",
      },
    ],
  ];

  const plugins = [
    [
      'babel-plugin-replace-import-extension',
      { extMapping: { '.js': '.cjs' } },
    ],
  ];

  return {
    presets,
    plugins,
  };
};

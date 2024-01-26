module.exports = function configureBabel(api) {
  const isTest = api.env("test");
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "12.13.0",
        },
        modules: isTest ? "cjs" : false,
      },
    ],
  ];

  const plugins =  []

  return {
    presets,
    plugins,
  };
};

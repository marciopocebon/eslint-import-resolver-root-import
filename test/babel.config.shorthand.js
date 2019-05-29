module.exports = {
  plugins: [
    [
      'root-import',
      {
        rootPathSuffix: 'modules/anotherpath',
        rootPathPrefix: '@',
      },
    ],
  ],
};

module.exports = {
  plugins: [
    [
      'babel-plugin-root-import',
      [
        {
          rootPathSuffix: 'modules',
          rootPathPrefix: '@',
        },
        {
          rootPathSuffix: 'modules/anotherpath',
          rootPathPrefix: '_',
        },
      ],
    ],
  ],
};

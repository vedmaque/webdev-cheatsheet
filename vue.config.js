module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/webdev-cheatsheet/' : '/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].title = 'WebDev Cheatsheet';

        return args;
      });
  },
};

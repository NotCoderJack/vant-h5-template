module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 375/10, or 750/10 = 75
      propList: ['*'],
    },
  },
};

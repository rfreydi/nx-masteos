// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const nrwlConfig = require("@nrwl/react/plugins/webpack.js");

// eslint-disable-next-line no-undef
module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.graphql$/,
          exclude: /node_modules/,
          use: 'graphql-tag/loader',
        }
      ]
    },
  };
};

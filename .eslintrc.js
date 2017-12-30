const settings = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  extends: 'standard-trailing-commas',
  plugins: ['import'],
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      webpack: {
        config: 'config/webpack.config.js',
      },
    },
  },
  globals: {
    NODE_ENV: true,
  },
  rules: {},
}

module.exports = settings

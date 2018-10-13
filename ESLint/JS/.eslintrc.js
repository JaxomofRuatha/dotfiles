module.exports = {
    extends: 'airbnb-base',
    parser: 'babel-eslint',
    env: {
      browser: true,
      node: true
    },
    plugins: ['import'],
    rules: {
      'comma-dangle': [2, 'only-multiline'],
      'import/no-extraneous-dependencies': [2, {
        devDependencies: true
      }],
      'max-len': [1, {
        ignoreUrls: true
      }],
      'no-param-reassign': [1],
      'no-plusplus': [0],
      'no-undef': [2],
      'no-underscore-dangle': [0],
      'no-unused-expressions': [1, {
        allowTaggedTemplates: true,
        allowTernary: true
      }],
      'no-use-before-define': [0],
      'quote-props': [1, 'consistent']
    }
  };
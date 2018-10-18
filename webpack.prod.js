const MERGE = require('webpack-merge');
const COMMON = require('./webpack.common.js');

const PROD_CONFIG = MERGE(COMMON, {
    mode: 'production'
});

module.exports = PROD_CONFIG;
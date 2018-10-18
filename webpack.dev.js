// const PATH = require('path');
// const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
// const CLEAN_WEBPACK_PLUGIN = require('clean-webpack-plugin');
// const WEBPACK = require('webpack');
const MERGE = require('webpack-merge');
const COMMON = require('./webpack.common.js');

const DEV_CONFIG = MERGE(COMMON, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});

module.exports = DEV_CONFIG;
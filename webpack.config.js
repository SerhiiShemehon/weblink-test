const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: "development",

    output: {
        filename: "fill.js"
    },

    plugins: [
        new HtmlWebpackPlugin({ template: "public/index.html" }),
        new CopyPlugin({
            patterns: [
                { from: 'public' },
            ],
        })
    ],

    devServer: {
        open: true
    }
};
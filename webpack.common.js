const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[base]'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    outputPath: 'img/',
                    publicPath: 'img/'
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    outputPath: 'fonts/',
                    publicPath: 'fonts/'
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Titel',
            template: 'src/template.html',
            inject: 'body'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/img/*.png', to: 'img/[base]' },
            ],
        })
    ],
}

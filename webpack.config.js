const path = require("path")
const basePath = __dirname
const distPath = 'dist'
//HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
//CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    //Modo De Funcionamiento
    mode: 'production',
    //Entry Point
    entry: {
        app: './src/index.js'
    },
    module:{
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins:
        [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin(),
        ],
    //output point
    output: {
        path: path.join(basePath, distPath),
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
}
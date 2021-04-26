const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const {CleanWebpackPlugin}= require("clean-webpack-plugin");
module.exports={
    entry:"./src/script.js",
    output: {
        filename:"[name].[contenthash].bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    mode:'production',
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    "style-loader", "css-loader"
                ]
            },
              {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: "babel-loader"
              },
              
           
        ]
    },

    plugins:[new HtmlWebpackPlugin({
        template: "./src/index.html"
    }), new CleanWebpackPlugin() ]
};
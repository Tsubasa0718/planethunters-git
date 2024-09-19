const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    devtool: "source-map",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/"
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "/"),
        },
        port: 8080,
        open: true,
        hot: true,
        liveReload: true,
        watchFiles: ["./index.html"], // ここを修正
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        config: path.resolve(__dirname, "postcss.config.js"),
                      },
                    },
                  },
                  "sass-loader",
                ],
              },
              {
                test: /\.mp3$/, // 音声ファイルの拡張子
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[hash].[ext]', // 出力ファイル名
                      outputPath: 'audio', // 音声ファイルの出力先フォルダ
                    },
                  },
                ],
              },
              
              {
                test: /\.mp4$/, // 動画ファイルの拡張子
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[hash].[ext]', // 出力ファイル名
                      outputPath: 'video', // 動画ファイルの出力先フォルダ
                    },
                  },
                ],
              },
              
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
              },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/style.css",
          }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            filename: "index.html",
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
            },
            cache: false, // ここを追加
          }),
          new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "./src/images"),
                to: path.resolve(__dirname, "dist/images"),
              },
            ],
          }),
          new ImageminWebpWebpackPlugin({
            config: [
              {
                test: /\.(png|jpe?g)$/i,
                options: {
                  quality: 75,
                },
              },
            ],
          }),
    ],
};

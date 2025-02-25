const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    global: path.resolve(__dirname, "app/global.js"),
    index: path.resolve(__dirname, "app/index.js"),
    listProducts: path.resolve(__dirname, "app/list-products.js"),
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true,
                includePaths: [path.resolve(__dirname, "../node_modules")],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][hash][ext][query]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][hash][ext][query]",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app/index.html"),
      chunks: ["global", "index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app/list-products.html"),
      chunks: ["listProducts", "global"],
      filename: "list-products.html",
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },

  devServer: {
    static: path.resolve(__dirname, "app"),
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app"),
      assets: path.resolve(__dirname, "app/assets"),
    },
    extensions: [".js", ".scss"],
  },

  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};

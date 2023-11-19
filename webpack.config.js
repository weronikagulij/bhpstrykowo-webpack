const mode = "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const devServer = { contentBase: "./dist" };

const entry = {
  index: ["./src/js/index.js", "./src/scss/index.scss"]
};

const _module = {
  rules: [
    {
      test: /\.txt$/i,
      use: "raw-loader"
    },
    {
      test: /\.s?css$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ]
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader",
          options: { minimize: true }
        }
      ]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: "svg-url-loader",
          options: {}
        }
      ]
    },
    {
      test: /\.(gif|png|jpe?g)$/i,
      use: [
        "file-loader",
        {
          loader: "image-webpack-loader",
          options: {}
        }
      ]
    },
    {
      test: /\.(webm|mp4)$/,
      use: 'file-loader'
    }
  ]
};

const output = {
  filename: "[name].bundle.js",
  path: __dirname + "/dist/"
};

const plugins = [
  new MiniCssExtractPlugin({
    filename: "./[name].bundle.css"
  }),
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
  new HtmlWebPackPlugin({
    template: "./src/pages/realizacje/index.html",
    filename: "./realizacje/index.html"
  }),
  new HtmlWebPackPlugin({
    template: "./src/pages/jak-dbac-o-odziez-ochronna/index.html",
    filename: "./jak-dbac-o-odziez-ochronna/index.html"
  }),
  new HtmlWebPackPlugin({
    template: "./src/pages/poszycia-stadionow/index.html",
    filename: "./poszycia-stadionow/index.html"
  })
];

module.exports = {
  entry,
  mode,
  module: _module,
  output,
  plugins,
  devServer: devServer
};

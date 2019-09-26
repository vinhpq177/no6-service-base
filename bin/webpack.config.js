const path = require("path")
const nodeExternals = require("webpack-node-externals")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: "./src/index.ts",
  devtool: 'source-map',
  mode: "production",
  watch: true,
  watchOptions: {
    poll: true
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@controller': path.join(__dirname, 'src', 'controller'),
      '@service': path.join(__dirname, 'src', 'service'),
      '@common': path.join(__dirname, 'src', 'common'),
      '@i18n': path.join(__dirname, 'src', 'i18n'),
      '@': path.join(__dirname, 'src', '.'),
    },
    extensions: [".ts"],
    modules: ["node_modules"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    devtoolModuleFilenameTemplate: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'package.json', to: '.' },
      { from: 'appconfig.json', to: '.' }
    ], {
        copyUnmodified: true
      })
  ]
}

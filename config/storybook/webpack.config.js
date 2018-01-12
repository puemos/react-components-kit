const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            query: {
              import: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]___[hash:base64:5]",
              modules: true,
              sourceMap: true
            }
          },
          { loader: "sass-loader" },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: path.join(__dirname, "./postcss.config.js")
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader?limit=25000",
        query: {
          limit: 10000,
          name: "static/media/images/[name].[hash:8].[ext]"
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  }
};

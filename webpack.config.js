const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        exclude: [/node_modules/, "/babel.config.js"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                indentWidth: 2
              }
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};

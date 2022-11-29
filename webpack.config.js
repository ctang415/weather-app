const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: {
          and: [/node_modules/],
          not: [
            /unfetch/,
            /d3-array|d3-scale/,
            /@hapi[\\/]joi-date/,
          ]
        },
        use: {
          loader: 'babel-loader',
          options: {
            "exclude": [
              /node_modules[\\/]core-js/,
              /node_modules[\\/]webpack[\\/]buildin/,
            ],
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
    ],
  },
};
es6 review tocode.co.il

in case of err run as admin...

npm init -y
npm i webpack --save-dev
npm i webpack-cli --save-dev
npm i babel-core babel-loader babel-preset-env --save-dev

npm install --save-dev webpack webpack-cli

webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};


https://www.tocode.co.il/bundles/webpack/lessons/e1018b81-2f67-4323-a82a-0b864c4e94db


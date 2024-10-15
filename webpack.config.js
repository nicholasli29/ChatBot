import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default (env) => {
  return {
    entry: {
      index: './src/index.mjs'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'ChatBot',
        template: 'src/assets/index.html'
      }),
      new webpack.DefinePlugin({
        'API_KEY': JSON.stringify(env.API_KEY),
        'PROMPT': JSON.stringify(env.PROMPT)
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve('dist'),
    },
    devServer: {
      static: './dist',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.css']
    },
    optimization: {
      runtimeChunk: 'single',
    }
  }
};
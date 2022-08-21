const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;

const { MFLiveReloadPlugin } = require('@module-federation/fmr');
const Dotenv = require('dotenv-webpack');

module.exports = (e, v) => {
  const { mode } = v;
  return {
    entry: './src/index.js',
    output: {
      publicPath: 'http://localhost:8003/',
      clean: true,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@constants': path.resolve(__dirname, 'src/constants/'),
        '@hooks': path.resolve(__dirname, 'src/hooks/'),
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@contexts': path.resolve(__dirname, 'src/contexts/'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@service': path.resolve(__dirname, 'src/service/'),
        '@views': path.resolve(__dirname, 'src/views/'),
        '@lib': path.resolve(__dirname, 'src/lib/'),
        '@enums': path.resolve(__dirname, 'src/enums/'),
      },
    },

    devServer: {
      port: 8003,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'app_search',
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          search: './src/pages/index.js',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
    ].concat(
      mode === 'production'
        ? [new Dotenv({ path: './.env.production' })]
        : [
            new MFLiveReloadPlugin({
              port: 8003, // the port your app runs on
              container: 'app_search', // the name of your app, must be unique
              standalone: false, // false uses chrome extention
            }),
            new Dotenv({ path: './.env.development' }),
          ]
    ),
  };
};

const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    // Shared configuration
    const commonConfig = {
        entry: './src/index.ts',
        output: {
            filename: 'bundle.[contenthash].js',
            path: __dirname + '/dist',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/template.html',
            }),
        ],
    };

    // Dynamically load dev or prod configuration
    const envConfig = isProduction ? prodConfig : devConfig;
    return merge(commonConfig, envConfig);
};

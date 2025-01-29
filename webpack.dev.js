
module.exports = {
    mode: 'development',

    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 8080,
        hot: true, // Enable hot module replacement
    },
};

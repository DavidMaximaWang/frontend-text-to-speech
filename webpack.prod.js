const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(), // Minify CSS
        ],
    },
    performance: {
        hints: 'warning', // Warn if asset size exceeds limit
        maxAssetSize: 512000, // 500KB
        maxEntrypointSize: 512000,
    },
};

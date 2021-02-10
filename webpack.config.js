const path = require('path')
//entry: './src/app.js',
// entry --> output
module.exports = {
    entry: './src/app.js',
    output: {
        path : path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,                                  // add css file
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'source-map',                                   //devtool: 'cheap-module-eval-source-map' --> to find the error easily
    devServer: {
        contentBase: path.join(__dirname, 'public'),           // to use dev server
        historyApiFallback: true
    }
};
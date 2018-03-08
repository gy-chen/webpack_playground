const path = require('path');

module.exports = {
    entry: './src/example.js',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './example'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example')
    }
};

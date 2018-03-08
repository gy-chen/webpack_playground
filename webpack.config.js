const path = require('path');

module.exports = {
    entry: './src/component.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'component'
    },
    externals: [
        'lodash/join'
    ]
}

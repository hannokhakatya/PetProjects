const path = require('path');


module.exports = {
    entry: { main: './js/index1.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, 
        ],
    },
   
};
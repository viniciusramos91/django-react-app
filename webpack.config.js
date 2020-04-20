module.exports = {
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        },{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            use: ['file'],
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    }
}


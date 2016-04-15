module.exports = {
    entry: {
     main: "./app/main.ts",
     shims: ['es6-shim', 'reflect-metadata', 'rxjs', 'zone.js']
    },
    output: {
        path: __dirname,
        filename: "./dist/[name].js",
        sourceMapFilename: "./dist/[name].map"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: 'ts-loader' }
        ]
    },
    devtool: "#source-map"
};
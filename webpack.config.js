var 
    debug = process.env.NODE_ENV !== "production",
    webpack = require("webpack"),

end_var_def = [];

module.exports = {
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!foundation-sites/dist/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: debug ? 
        [
            new webpack.ProvidePlugin({
                "$": "jquery",
                "jQuery": "jquery"
            })
        ] : 
        [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
            new webpack.ProvidePlugin({
                "$": "jquery",
                "jQuery": "jquery"
            })
        ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        extensions: ["", ".jsx", ".js"],
        alias: {
            Main:               "app/components/Main.jsx",
            Nav:                "app/components/Nav.jsx",
            appStyles:          "app/styles/app.scss",
        }
    }, 
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: debug ? "eval-source-map" : null
};
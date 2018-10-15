const path = require("path")

module.exports = {
    entry: {
        "index": "./src/javascript/index.jsx",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public/")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js(x)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ],
                exclude: [/node_modules/],
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {url: false}},
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: []
}
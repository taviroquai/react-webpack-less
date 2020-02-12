module.exports = {
    module: {
        rules: [
            {
                test: /\.(ttf)$/,
                use: "file-loader"
            },
            {
                test: /\.(jpg|png)$/,
                use: "file-loader"
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}
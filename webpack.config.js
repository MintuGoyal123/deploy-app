const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	"entry": "./src/index.js",
	"output": {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/deploy-app/"
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		],
	},
	plugins:[
	new HtmlWebpackPlugin({
		template: "./src/index.html",
		filename: "./index.html"
	})
	]

}
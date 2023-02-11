const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	mode: 'development',
	entry: './src/scripts/app.js',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Web Portfolio',
			template: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/images', to: 'images', globOptions: { ignore: ['*.js'] } }
			],
		}),
		new MiniCssExtractPlugin()
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
		minimize: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
	},
};
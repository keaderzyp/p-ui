const path = require('path')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
	entry:{
		'p-ui':'./src/p-ui.js',
		'p-button':'./src/components/p-button/p-button-export.js',
		'p-link':'./src/components/p-link/p-link-export.js'
	},
	mode:'production',
	output:{
		path:path.resolve(__dirname,'lib'),
		filename:'[name].min.js',
		library:'PUI',
		libraryTarget:'umd',
		umdNamedDefine:true
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:{
					loader:'babel-loader'
				}
			},
			{
				test:/\.css$/,
				use:[
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				test:/\.scss$/,
				use:[
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
						},
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			},
			{
				test:/\.(woff|woff2|eot|ttf|svg|otf)$/,
				use:[
					{
						loader:'file-loader',
						options:{
							name:'[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename:'[name].min.css'
		})
	]
}
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
	entry:{
		'p-ui':path.resolve(__dirname,'src/index.js')
	},
	devtool:'inline-source-map',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].js',
		publicPath:'/'
	},
	devServer:{
		contentBase: path.resolve(__dirname, "dist"),
		port:8088,
		hot:true
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				use:{
					loader:'vue-loader'
				}
			},
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
					'css-loader'
				]
			},
			{
				test:/\.scss$/,
				use:[
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test:/\.(woff|woff2|eot|ttf|svg|otf)$/,
				use:[
					{
						loader:'file-loader'
					}
				]
			}
		]
	},
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template:`./public/index.html`,
			filename:`index.html`,
			chunks:['p-ui']
		})
	]
}
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: 'production',
	entry:[
		'./index.js'
	],
	devtool: 'inline-source-map',
	devServer: {
	    contentBase: './dist'
	},
	output:{
			path:path.resolve(__dirname,'dist'),
			filename:'bundle.js'
			// ,
			// publicPath:'./images/'
	},
	module: {
	    rules:[
			{
			    test: /\.html$/,
			    use: {
			        loader: 'html-loader'
			    }
			},
	    	{
		        test: /\.(png|jpg|gif)$/i,
		        use: [
		          {
		            loader: 'url-loader',
		            options: {
		              limit: 1000000
		            }
		          }
		        ]
		    },
	      	{
		        test:/\.css$/,
		        use: [
		            // fallback to style-loader in development
		            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
		            "css-loader",
		            "sass-loader"
		        ]
		    },
		    {
		        test:/\.scss$/,
		        use: [
			        {
		                loader: "style-loader"
		            }, 
		            {
		                loader: "css-loader", options: {
		                    sourceMap: true
		                }
		            }, 
		            {
		                loader: "sass-loader", options: {
		                    sourceMap: true
		                }
		            }
	            ]
		    }
	    ]
	},
	plugins: [
	    new CleanWebpackPlugin(['dist']),
	    new HtmlWebpackPlugin({
	      	filename:'index.html',
          	template:'index.html',
	      	title: 'webpack-demo'
	    }),
	    new MiniCssExtractPlugin({
	        // Options similar to the same options in webpackOptions.output
	        // both options are optional
	        filename: "[name].css",
	        chunkFilename: "[id].css"
	    })
	]
}
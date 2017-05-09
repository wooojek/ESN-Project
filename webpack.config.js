//Webpack Config
module.exports	=	{
		entry:	"./js/app.jsx",
		output:	{	filename:	"./js/out.js"	},
		devServer: {
			inline: true,
			contentBase: './',
			port: 3001
		},
		watch:	true,
		module:	{
				loaders:	[
						{
								test:	/\.jsx$/,		exclude:	/node_modules/,
								loader:	'babel-loader',
								query:	{	
											presets:	['es2015',	'stage-2', 'react'],
											plugins: ["transform-decorators-legacy"]
										}
						},
						{
								test: /\.scss$/,
								use: [{
									loader: "style-loader" // creates style nodes from JS strings
								}, {
									loader: "css-loader" // translates CSS into CommonJS
								}, {
									loader: "sass-loader" // compiles Sass to CSS
								}]
						}
						
				]
		}
}

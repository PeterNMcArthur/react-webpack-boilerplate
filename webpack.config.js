const path = require("path")
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "./public/assets/"),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	},
	watch: true,
	devServer: { 
		inline: true
	},
	plugins: [
    new LiveReloadPlugin()
  ]
};

module.exports = function () {
	var client = './',
		clientApp = client + 'app/',
		config = {
			temp: './.tmp/',

			/**
			 * File paths
			 */
			appDir: clientApp,
			client: client,
			css: [
				clientApp + '**/*.css'
			],
			cssDir: client + 'css',
			getWiredepDefaultOptions: getWiredepDefaultOptions,
			index: client + 'index.html',
			js: [
				clientApp + '**/*-module.js',
				clientApp + '**/*-state.js',
				clientApp + '**/*-service.js',
				clientApp + '**/*.js'
			],
			karmaFile: __dirname + '/test/karma.conf.js',

			/**
			 * Bower and NPM locations
			 */
			bower: {
				json: require(client + 'bower.json'),
				directory: client + 'bower_components',
				ignorePath: '../..'
			}
		};

	return config;

	function getWiredepDefaultOptions() {
		var options = {
			bowerJson: config.bower.json,
			directory: config.bower.directory,
			ignorePath: config.bower.ignorePath
		};

		return options;
	}
};
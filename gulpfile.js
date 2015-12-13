var gulp = require('gulp'),
	config = require('./gulp.config')(),
	karmaServer = require('karma').Server,
	$ = require('gulp-load-plugins')({lazy: true});

gulp.task('inject-dev', injectDev);
gulp.task('test', testOnce);
gulp.task('tdd', testAndWatch);

//////////
function injectDev() {
	var options = config.getWiredepDefaultOptions(),
		wiredep = require('wiredep').stream;

	return gulp
		.src(config.index)
		.pipe(wiredep(options))
		.pipe($.inject(gulp.src(config.js, {read: false}), {addRootSlash: true}))
		.pipe($.inject(gulp.src(config.css, {read: false}), {addRootSlash: true}))
		.pipe(gulp.dest(config.client));
}

function testAndWatch(done) {
	new karmaServer({
		configFile: config.karmaFile
	}, done).start();
}

function testOnce(done) {
	new karmaServer({
		configFile: config.karmaFile,
		singleRun: true
	}, done).start();
}
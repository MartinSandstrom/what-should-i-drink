var gulp = require('gulp');
var gls = require('gulp-live-server');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./app/**/*')
    .pipe(ghPages());
});

gulp.task('serve', function() {
    //1. serve with default settings
    var server = gls.new('app.js');
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch([
        'app/**/*.css', 'app/**/*.html', 'app/**/*.js'
    ], function(file) {
        server.notify.apply(server, [file]);
    });
});
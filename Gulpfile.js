var gulp = require('gulp');
var gls = require('gulp-live-server');
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
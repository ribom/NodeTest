var gulp = require('gulp');
var jsHint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];
var ejsFiles = ['*.ejs'];
var filesToWatch = jsFiles.concat(ejsFiles);

console.log(filesToWatch);

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jsHint())
        .pipe(jsHint.reporter('jshint-stylish', {
            verbose: true
        }));
});


gulp.task('inject', function () {

    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {
        read: false
    });
    var injectOptions = {
        ignorePath: '/public'
    };
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));

});

gulp.task('serve', ['style', 'inject'], function () {
    var options = {
        script: 'appStart.js',
        delayTime: 1,
        env: {
            'PORT': 3000,
        },
        watch: filesToWatch
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting server...');
        });
});

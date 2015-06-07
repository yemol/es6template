var gulp = require('gulp');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var karma = require('karma').server;
var rimraf = require('rimraf');
var path = require('path');

var config = {
  target: 'dist'
};

gulp.task('clean', function (cb) {
  rimraf(config.target, cb);
});

gulp.task('babel', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest(config.target));
});

gulp.task('lint', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('server', function () {
  nodemon({
    script: 'dist/server.js',
    ext: 'js',
    env: {
      NODE_ENV: 'development'
    }
  }).on('restart', function () {
    console.log('server restarted');
  });
});

gulp.task('test', function (done) {
  karma.start({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: true
  }, done);
});

gulp.task('build', ['lint', 'babel'], function () {
});

gulp.task('default', ['build', 'server', 'watch'], function () {
});

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');

function uglifyJs () {
  return gulp.src('./src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
}

function uglifyCss () {
  return gulp.src('./src/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist/css'));
}

exports.default = gulp.parallel(uglifyJs, uglifyCss);

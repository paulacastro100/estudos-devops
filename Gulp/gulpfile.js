var gulp = require('gulp')
, minifyHtml = require("gulp-minify-html")
, minifyCss = require("gulp-minify-css")
, minifyJs = require("gulp-uglify");
//, jshint = require("gulp-jshint");

gulp.task('minificar-html', function() {
  gulp.src('./html/*.html')
  .pipe(minifyHtml())
  .pipe(gulp.dest('./minificados/'));
});


gulp.task('minificar-css', function() {
  gulp.src('./css/*.css')
  .pipe(minifyCss())
  .pipe(gulp.dest('./minificados/'));
});

//glifyJS is a JavaScript compressor/minifier written in JavaScript.
gulp.task('minificar-js', function() {
  gulp.src('./js/*.js')
  .pipe(minifyJs())
  .pipe(gulp.dest('./minificados/'));
});

gulp.task('jsLint', function() {
  gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

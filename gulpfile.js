var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   rename = require('gulp-rename');

gulp.task('minify-javascript', function () {
   gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(rename ({ suffix : '.min' }))
      .pipe(gulp.dest('build/app.js'))
});

gulp.task('watch',[],function(){
	gulp.watch('js/**/*.js', ['minify-javascript']);
});


var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');

gulp.task('fileinclude', function () {
  gulp.src(['input/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './input/'
    }))
    .pipe(gulp.dest('./output/'));
});
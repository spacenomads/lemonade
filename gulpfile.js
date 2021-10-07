const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');





function styles() {
  return src('./_src/assets/_scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(rename('main.min.css'))
    .pipe(dest('./_src/assets/css'));
}





// Clean
function clean(cb) {
  del.sync(['dist/**/*']);
  cb();
}





// Serve application
const go = series(styles, function (cb) {
  watch('./_src/assets/_scss/**/*.scss', styles);
  cb();
});


module.exports = {
  clean,
  styles,
  go,
}

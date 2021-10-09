const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const del = require('del');
const mqpacker = require('@hail2u/css-mqpacker');
const postcss = require('gulp-postcss');





function styles() {
  const plugins = [mqpacker({ sort: true })];
  return src('./_src/assets/_scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'extended',
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(autoprefixer({
      cascade: false
    }))
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

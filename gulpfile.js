const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildCSS() {
   return src('./src/assets/styles/index.scss')
      .pipe(sass())
      .pipe(dest('./src'))
}

function watchTask() {
   watch(['./src/assets/styles/**/*.scss'], buildCSS)
}

exports.default = series(buildCSS, watchTask)
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const babel = require('gulp-babel');

function buildStyles() {
  return src('sass/**/*.scss')   
    // .pipe(sass()) // wanted to compress
    .pipe(sass({ outputStyle: 'compressed' }))
    // to show what css values it should render, it can be an array of paths relative
    // to this file, the way I did it it will look for all the root level html files 
    .pipe(purgecss({ content: ['public/**/*.html'] }))
    .pipe(dest('public/assets/css'))
}

// "build": "npx babel --watch src -d public/assets/js"
// function buildJs() {
//   return src('src/**/*.js')
//     .pipe(babel({
//       presets: ['@babel/preset-env'],
//       plugins: ['@babel/transform-runtime']
//     }))
//     .pipe(dest('public/assets/js'))
// }

function watchTask() {
  // wanna watch for changes in the html pages too
  watch(['sass/**/*.scss', '*.html'], buildStyles)
  // watch(['src/**/*.js', '*.html'], buildJs)
}

// exports.default = series(buildStyles, buildJs, watchTask)
exports.default = series(buildStyles, watchTask)

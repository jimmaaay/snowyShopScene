var gulp = require("gulp");
var watch = require("gulp-watch");
var plumber = require("gulp-plumber");
var sass = require("gulp-ruby-sass");
var autoprefixer = require('gulp-autoprefixer');

function styles(){
  return sass("./src/stylesheets/main.scss", {sourcemap:false, style:"expanded"})
  .on("error", sass.logError)
  .pipe(plumber())
  .pipe(autoprefixer({
    browsers: ['> 5%', 'IE 10'],
    cascade: false
  }))
    .pipe(gulp.dest("./dist/stylesheets"))
}


gulp.task("styles", styles);

gulp.task("watch", function(){
  watch("src/**/*.scss", styles);
})

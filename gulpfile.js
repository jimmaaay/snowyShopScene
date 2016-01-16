var gulp = require("gulp");
var watch = require("gulp-watch");
var plumber = require("gulp-plumber");
var sass = require("gulp-ruby-sass");

function styles(){
  return sass("./src/stylesheets/main.scss", {sourcemap:false, style:"expanded"})
  .on("error", sass.logError)
  .pipe(plumber())
    .pipe(gulp.dest("./dist/stylesheets"))
}


gulp.task("watch", function(){
  watch("src/**/*.scss", styles);
})

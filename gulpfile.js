var gulp = require('gulp')
var rename = require('gulp-rename');

const FILES =[
  '!./node_modules/jupyter-echarts/echarts/main.js',
  '!./node_modules/echarts-countries-js/echarts-countries-js/index.js',
  '!./node_modules/echarts-china-provinces-js/echarts-china-provinces-js/index.js',
  '!./node_modules/echarts-china-cities-js/echarts-china-cities-js/index.js',
  './node_modules/jupyter-echarts/echarts/*.js',
  './node_modules/echarts-countries-js/echarts-countries-js/*.js',
  './node_modules/echarts-china-provinces-js/echarts-china-provinces-js/*.js',
  './node_modules/echarts-china-cities-js/echarts-china-cities-js/*.js',
  './node_modules/echarts-china-misc-js/echarts-china-misc-js/*.js',
  './node_modules/echarts-united-kingdom-js/echarts-united-kingdom-js/*.js'
]
       
gulp.task('default', function(){
  gulp.src(FILES)
    .pipe(rename({dirname:''}))
    .pipe(gulp.dest('js'));
});

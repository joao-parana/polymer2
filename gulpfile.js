'use strict';

// Include promise polyfill for node 0.10 compatibility
// require('es6-promise').polyfill();

// Include Gulp & tools we'll use
var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

// var del = require('del');
// var runSequence = require('run-sequence');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;
// var merge = require('merge-stream');
// var path = require('path');
// var fs = require('fs');
// var glob = require('glob-all');
// var historyApiFallback = require('connect-history-api-fallback');
// var packageJson = require('./package.json');
// var crypto = require('crypto');
// var ensureFiles = require('./tasks/ensure-files.js');


// Transpile all JS to ES5.
gulp.task('js', function () {
 return gulp.src(['./es6/**/*.{js,html}', '!./bower_components/**/*'])
   .pipe($.if('*.html', $.crisper({scriptInHead:false}))) // Extract JS from .html files
   .pipe($.sourcemaps.init())
   .pipe($.if('*.js', $.babel({
     presets: ['es2015']
   })))
   .pipe($.sourcemaps.write())
   .pipe(gulp.dest('es5/'))
   .pipe(gulp.dest('dist/'));
});

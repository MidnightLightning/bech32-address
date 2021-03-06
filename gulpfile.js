'use strict';
const gulp = require('gulp');

const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

/**
 * Means to gracefully handle errors, rather than droppping out of a "watch" session
 */
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

/**
 * Transform ES2015 content into ES5 for distribution
 */
gulp.task('es2015', () => {
  return gulp.src('./js/**/*.{js,jsx}')
    .pipe(babel({
      presets: [
        'env', // Transform ES2015+ content to ES5
        'react' // Transform JSX into JS
      ],
      plugins: ['transform-es2015-modules-amd'] // Use AMD module style, so RequireJS can handle it
    }))
    .pipe(uglify())
    .on('error', handleError)
    .pipe(gulp.dest('dist/js'));
});

/**
 * Transform ES2015 content into ES5 without uglifying
 */
gulp.task('es2015-pretty', () => {
  return gulp.src('./js/**/*.{js,jsx}')
    .pipe(babel({
      presets: [
        'env', // Transform ES2015+ content to ES5
        'react' // Transform JSX into JS
      ],
      plugins: ['transform-es2015-modules-amd'] // Use AMD module style, so RequireJS can handle it
    }))
    .on('error', handleError)
    .pipe(gulp.dest('dist/js'));
});

/**
 * Transform ES2015 content into ES5 for development
 */
gulp.task('es2015-map', () => {
  return gulp.src('./js/**/*.{js,jsx}')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [
        'env', // Transform ES2015+ content to ES5
        'react' // Transform JSX into JS
      ],
      plugins: ['transform-es2015-modules-amd'] // Use AMD module style, so RequireJS can handle it
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .on('error', handleError)
    .pipe(gulp.dest('dist/js'));
});

gulp.task('lint', () => {
  return gulp.src('js/**/*.{js,jsx}')
    .pipe(eslint())
    .pipe(eslint.format('compact'));
});

gulp.task('watch', () => {
  gulp.watch('./js/**/*.{js,jsx}', ['es2015-pretty']);
});

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify')

sass.compiler = require('node-sass');

const sassSource = './src/scss/**/*.scss';
const cssDestDev = './src/css';
const cssDestProd = './dist/css';

const jsSource = './src/js/**/*.js';
const jsDest = './dist/js';

const sassDevOption = {
    outputStyle: 'expanded'
};

const sassProdOption = {
    outputStyle: 'compressed'
};

gulp.task('default', watch);
gulp.task('sassDev', compilerSassDev);
gulp.task('sassProd', compilerSassProd);
gulp.task('imageMinProd', compilerImageProd);
gulp.task('scripts', compilerScriptsJS);


function compilerSassDev() {
    return gulp.src(sassSource)
    .pipe(sass(sassDevOption))
    .pipe(gulp.dest(cssDestDev))
}

function compilerSassProd() {
    return gulp.src(sassSource)
    .pipe(sass(sassProdOption).on('err', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDestProd))
}

function compilerImageProd() {
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

function compilerScriptsJS() {
    return gulp.src(jsSource)
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(jsDest))
}

function watch() {
    gulp.watch(sassSource, compilerSassDev),
    gulp.watch(sassSource, compilerSassProd),
    gulp.watch('./src/images/*', compilerImageProd),
    gulp.watch(jsSource, compilerScriptsJS)
}

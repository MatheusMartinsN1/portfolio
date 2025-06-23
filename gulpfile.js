let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');

// Tarefa para desenvolvimento com sourcemaps e watch
function stylesDev() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// Tarefa para build sem sourcemaps e CSS minificado
function stylesBuild() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./build/styles'));
}

function watchFiles() {
    return gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, stylesDev);
}

exports.dev = gulp.series(stylesDev, watchFiles);
exports.build = stylesBuild;
exports.default = exports.dev;

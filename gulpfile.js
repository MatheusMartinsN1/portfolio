let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');

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

// Tarefa para minificar arquivo JS
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
    }

function watchFiles() {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, stylesDev);
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, scripts);
}

exports.dev = gulp.series(stylesDev, scripts, watchFiles);
exports.build = gulp.series(stylesBuild, scripts);
exports.default = exports.dev;

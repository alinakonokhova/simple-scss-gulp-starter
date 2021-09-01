const project_folder = require('path').basename(__dirname);
const src_folder = '#src';
const { src, dest } = require('gulp');
const gulp = require("gulp");
const browsersync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const fileinclude = require('gulp-file-include');
const del = require('del');
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const group_media = require('gulp-group-css-media-queries');
const clean_css = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webpcss = require('gulp-webp-css');
const webphtml = require('gulp-webp-html');
const fonter = require("gulp-fonter");

const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");

const fs = require('fs');

const path = {
   build: {
      html: `${project_folder}/`,
      css: `${project_folder}/css`,
      js: `${project_folder}/js`,
      img: `${project_folder}/img`,
      fonts: `${project_folder}/fonts`,
   },
   src: {
      html: `${src_folder}/*.html`,
      css: `${src_folder}/scss/*.scss`,
      js: [`${src_folder}/js/app.js`, `${src_folder}/js/vendors.js`],
      img: `${src_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
      fonts: `${src_folder}/fonts/*.ttf`,
   },
   watch: {
      html: `${src_folder}/**/*.html`,
      css: `${src_folder}/scss/**/*.scss`,
      js: `${src_folder}/js/**/*.js`,
      img: `${src_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
   },
   clean: `./${ project_folder }/`,
};

function browserSync(params) {
   browsersync.init({
      server: {
         baseDir: `./${ project_folder }/`,
      },
      port: 3000,
      notify: true,
   });
}

function clean() {
   return del(path.clean);
}

function html() {
   return (
      src(path.src.html)
         .pipe(plumber())
         .pipe(fileinclude())
         .pipe(webphtml())
         .pipe(dest(path.build.html))
         .pipe(browsersync.reload({stream: true}))
   );
}

function css() {
   return (
      src(path.src.css)
         .pipe(plumber())
         .pipe(
            scss({
               outputstyle: 'expanded',
            }).on('error', scss.logError)
         )
         .pipe(group_media())
         .pipe(
            autoprefixer({
               overrideBrowsersList: ['last 5 versions'],
               cascade: true,
            }),
         )
         .pipe(webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
         }))
         .pipe(dest(path.build.css))
         .pipe(clean_css())
         .pipe(
            rename({
               extname: '.min.css',
            }),
         )
         .pipe(dest(path.build.css))
         .pipe(browsersync.reload({stream: true}))
   );
}

function js() {
   return src(path.src.js)
      .pipe(plumber())
      .pipe(fileinclude())
      .pipe(dest(path.build.js))
      .pipe(uglify())
      .pipe(
         rename({
            extname: '.min.js',
         }),
      )
      .pipe(dest(path.build.js))
      .pipe(browsersync.stream());
}

function images() {
   return src(path.src.img)
      .pipe(
         webp({
            quality: 70,
         }),
      )
      .pipe(dest(path.build.img))
      .pipe(src(path.src.img))
      .pipe(
         imagemin({
             progressive: true,
             svgoPlugins: [{removeViewBox: false}],
             interlaced: true,
             optimizationLevel: 3 // 0 to 7
         })
      )
      .pipe(dest(path.build.img))
      .pipe(browsersync.reload({stream: true}))
}

// gulp.task("svgSprite", function () {
//    return gulp
//       .src([src_folder + "img/iconsprite/*.svg"])
//       .pipe(
//          svgSprite({
//             mode: {
//                Stack: {
//                   sprite: "../img/icons/icons.svg",
//                   //example: true
//                },
//             },
//          })
//       )
//       .pipe(dest(path.build.img));
// });

function fonts() {
   src(path.src.fonts)
      .pipe(ttf2woff())
      .pipe(dest(path.build.fonts));
   return src(path.src.fonts)
      .pipe(ttf2woff2())
      .pipe(dest(path.build.fonts));
}

function fontsStyle() {
   let file_content = fs.readFileSync(src_folder + '/scss/components/fonts.scss');
   if (file_content == '') {
      fs.writeFile(src_folder + "/scss/components/fonts.scss", '', cb);
      return fs.readdir(path.build.fonts, function (err, items) {
         if (items) {
            let c_fontname;
            for (var i = 0; i < items.length; i++) {
               let fontname = items[i].split(".");
               fontname = fontname[0];
               if (c_fontname != fontname) {
                  fs.appendFile(
                     src_folder + "/scss/components/fonts.scss",
                     '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n',
                     cb
                  );
               }
               c_fontname = fontname;
            }
         }
      });
   }
}

function cb() {}

// gulp.task("otf2ttf", function () {
//    return src([src_folder + "/fonts/*.otf"])
//       .pipe(
//          fonter({
//             formats: ["ttf"],
//          })
//       )
//       .pipe(dest(src_folder + "/fonts/"));
// });

function watchFiles() {
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.css, css);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.img, images);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts), fontsStyle);
const watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;

let mix = require('laravel-mix');


mix
    .js('src/assets/js/app.js', 'js')
    .sass('src/assets/sass/style.scss', 'css')
    .browserSync({
        server: "./dist/",
        files: [
            "dist/**/*.*",
        ],
        proxy: false,
    })

mix.setPublicPath('dist/assets');

let mix = require("laravel-mix");
mix
    .js('dist/js/main.js', 'assets/js/main.js')
    .autoload({
        jquery: ["$", "window.jQuery"],
    })
        .sass("dist/scss/main.scss", "assets/css/main.css", {
            sassOptions: {
                outputStyle: 'compressed'
            }
        }).options({
        processCssUrls: false
    })
    // .postCss("dist/main.css", "assets/css/main.css")

mix.options({
    postCss: [
        require('postcss-custom-properties'),
        require("autoprefixer"),
    ]
});
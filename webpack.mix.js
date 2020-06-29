const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.postCss('resources/css/fabdb.css', 'public/css', [
    require('tailwindcss')
]);


if (mix.inProduction()) {
    mix.js('resources/js/app.js', 'public/js/app.min.js').sourceMaps(true, 'source-map');
} else {
    mix.js('resources/js/app.js', 'public/js/app.js');
}

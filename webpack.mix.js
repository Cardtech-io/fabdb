const mix = require('laravel-mix');

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
});

let ext = mix.inProduction() ? 'min.js': 'js';

mix.webpackConfig({
    output: {
        chunkFilename: 'js/[name].'+ext+'?id=[chunkhash]',
    }
});

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

if (mix.inProduction()) {
    mix.js('resources/js/app.js', 'public/js/app.min.js').version();
    mix.js('resources/js/embed.js', 'public/js/embed.min.js').version();
    mix.postCss('resources/css/fabdb.css', 'public/css/fabdb.min.css', [
        require('tailwindcss')
    ]).version();
} else {
    mix.js('resources/js/app.js', 'public/js/app.js');
    mix.js('resources/js/embed.js', 'public/js/embed.js');
    mix.postCss('resources/css/fabdb.css', 'public/css', [
        require('tailwindcss')
    ]);
}




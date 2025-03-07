const mix = require('laravel-mix');

mix.js('resources/js/admin/main.js', 'public/js/admin')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
      resolve: {
         extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
         alias: {
            '@': __dirname + '/resources/js'
         }
      }
   })
   .version();
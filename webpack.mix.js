const path = require('path')
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
   

if (mix.inProduction()) {

   mix.version()
   mix.sourceMaps()
   mix.disableNotifications()

   mix.extract([
      'vue',
      'axios',
      'vuex',
      'vue-i18n',
      'vue-router',
  ])

}

mix.webpackConfig({
   plugins: [
      // new BundleAnalyzerPlugin()
   ],
   resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
         '~': path.join(__dirname, './resources/js')
      }
   },
   output: {
      chunkFilename: 'js/[name].[chunkhash].js',
      publicPath: mix.config.hmr ? '//localhost:8080' : '/'
   }
})
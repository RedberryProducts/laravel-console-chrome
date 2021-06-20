const mix = require('laravel-mix');

mix
	.postCss('src/css/app.css', 'css', [
		require('tailwindcss'),
	])
	.js('src/js/laravel-console-loader.js', 'js')
	.js('src/js/app.js', 'js/console.js')
	.vue({version: 3})
	.setPublicPath('public');
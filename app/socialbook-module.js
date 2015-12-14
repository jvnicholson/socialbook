(function () {
	'use strict';

	angular.module('socialbook', ['ngMaterial'])
		.config(function ($mdThemingProvider) {

			$mdThemingProvider.definePalette('socialbook', {
				'50': 'd5dbfc',
				'100': 'a6abc3',
				'200': '84889b',
				'300': '565865',
				'400': '33333a',
				'500': 'd5dbfc',
				'600': 'd5dbfc',
				'700': '2b2c33',
				'800': '1e1f24',
				'900': '17171c',
				'A100': '33333a',
				'A200': 'ffffff',
				'A400': 'ffffff',
				'A700': 'ffffff',
				'contrastDefaultColor': 'light',
				'contrastDarkColors': ['50', '100', '200', '500', '600', 'A200'],
			});


			$mdThemingProvider.theme('default')
				.primaryPalette('socialbook')
				.accentPalette('teal');
		});
})();

(function () {
	'use strict';

	angular.module('socialbook')
		.directive('socialbookApp', directive);

	function directive() {
		return {
			restrict: 'EA',
			templateUrl: 'app/socialbook.tmpl.html',
			scope: {}
		}
	}
})();

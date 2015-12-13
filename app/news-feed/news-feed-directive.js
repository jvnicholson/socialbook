(function () {
	'use strict';

	angular.module('socialbook')
		.directive('newsFeed', directive);

	function directive() {
		return {
			restrict: 'EA',
			templateUrl: 'app/news-feed/news-feed.tmpl.html',
			scope: {},
			controller: ['newsFeedService', controller],
			controllerAs: 'newsFeed'
		};

		function controller(newsFeedService) {
			var vm = this;

			// Properties
			vm.newsFeedItems = [];

			// Methods

			// Init
			getNewsFeed();

			// Helpers
			function getNewsFeed() {
				newsFeedService.getNewsFeed()
					.then(function(response) {
						vm.newsFeedItems = response.data;
					});
			}
		}
	}
})();

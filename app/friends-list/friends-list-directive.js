(function () {
	'use strict';

	angular.module('socialbook')
		.directive('friendsList', directive);

	function directive() {
		return {
			restrict: 'EA',
			templateUrl: 'app/friends-list/friends-list.tmpl.html',
			scope: {},
			controller: ['friendsListService', controller],
			controllerAs: 'friendsList'
		};

		function controller(friendsListService) {
			var vm = this;

			// Properties
			vm.friends = [];

			// Methods


			// Init
			init();

			// Helpers
			function init() {
				friendsListService.getFriends()
					.then(function(response) {
						vm.friends = response.data;
					});
			}
		}
	}
})();

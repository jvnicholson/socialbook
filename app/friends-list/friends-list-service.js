(function() {
	'use strict';

	angular.module('socialbook')
		.factory('friendsListService', ['$http', service]);

	function service($http) {
		return {
			getFriends: getFriends
		};

		function getFriends() {
			return $http({
				method: "GET",
				url: 'app/data/friends.json'
			});
		}
	}

})();
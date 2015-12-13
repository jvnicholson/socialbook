(function () {
	'use strict';

	angular.module('socialbook')
		.factory('newsFeedService', ['$q', 'friendsListService', newsFeedService]);

	function newsFeedService($q, friendsListService) {
		return {
			getNewsFeed: getNewsFeed
		};

		// simply returns a random subset (half) of the 'friends' array from the 'friendsListService'
		function getNewsFeed() {
			return $q(function(resolve, reject) {
				friendsListService.getFriends()
					.then(function (response) {
						var originalFriends = response.data,
							randomizedFriends = randomizeArray(originalFriends);

						resolve({ data: randomizedFriends.slice(0, Math.floor(randomizedFriends.length / 2)) });
					});
			});
		}
	}

	function randomizeArray(arr) {
		var sortedArray = [],
			len = arr.length;

		while(len > 0) {
			var j = Math.floor(Math.random() * arr.length);
			var randomItem = arr.splice(j, 1);
			sortedArray.push(randomItem[0]);
			len = arr.length;
		}

		return sortedArray;
	}
})();

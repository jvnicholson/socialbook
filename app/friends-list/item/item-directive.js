(function () {
	'use strict';

	angular.module('socialbook')
		.directive('friendsListItem', directive);

	function directive() {
		return {
			restrict: 'EA',
			templateUrl: 'app/friends-list/item/item.tmpl.html',
			scope: {
				friend: "="
			},
			controller: ['$scope', controller],
			controllerAs: 'item'
		};

		function controller($scope) {
			var vm = this;

			// Properties
			vm.firstName = $scope.friend.name.first;
			vm.lastName = $scope.friend.name.last;

			// Methods
			vm.noop = angular.noop;

			// Init
			setIconBackgroundPosition($scope.friend.id);

			// Helpers
			function setIconBackgroundPosition(i) {
				// We only have 9 icons, in a 3 x 3 grid. Reuse them for all 'i'.
				var index = i - (Math.floor(i / 9) * 9),
					row = Math.floor(index / 3),
					col = index;

				if(index > 2) {
					col = index % 3;
				}

				var y = 27 + (row * 102);
				var x = 32 + (col * 97);
				vm.iconStyle = {
					'background-position': '-' + x + 'px ' + '-' + y + 'px'
				};
			}
		}
	}
})();

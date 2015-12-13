(function () {
	'use strict';

	angular.module('socialbook')
		.directive('newsFeedItem', directive);

	function directive() {
		return {
			restrict: 'EA',
			templateUrl: 'app/news-feed/item/item.tmpl.html',
			scope: {
				data: "=item"
			},
			controller: ['$scope', controller],
			controllerAs: 'item'
		};

		function controller($scope) {
			var vm = this;

			// Properties
			vm.fullName = $scope.data.name.first + " " + $scope.data.name.last;
			vm.timestamp = moment($scope.data.timestamp).fromNow();
			vm.status = $scope.data.status;

			// Methods

			// Init
			setIconBackgroundPosition($scope.data.id);

			// Helpers
			function setIconBackgroundPosition(i) {
				// We only have 9 icons, in a 3 x 3 grid. Reuse them for all 'i'.
				var index = i - (Math.floor(i / 9) * 9),
					row = Math.floor(index / 3),
					col = index;

				if(index > 2) {
					col = index % 3;
				}

				var y = 15 + (row * 61);
				var x = 19 + (col * 58);
				vm.iconStyle = {
					'background-position': '-' + x + 'px ' + '-' + y + 'px'
				};
			}
		}
	}
})();

(function () {
	'use strict';

	angular.module('socialbook')
		.controller('statusController', ['$scope', 'statusService', controller])
		.directive('status', directive);

	function directive() {
		return {
			restrict: 'EA',
			templateUrl: 'app/status/status.tmpl.html',
			controller: 'statusController',
			controllerAs: 'status',
			scope: {}
		};
	}

	function controller($scope, statusService) {
		var vm = this;

		// Properties
		vm.statusLabel = "Just chillin' on a lazy Sunday!";

		// Methods
		vm.update = update;

		// Init

		// Helpers
		function update(newStatus) {
			if (!newStatus)
				return;

			vm.statusLabel = newStatus;
			statusService.updateStatus(newStatus)
				.then(function (response) {
					var result = response.data;
					if (result.status === 'success') {
						vm.statusLabel = newStatus;
					} else {
						// let the user know something went wrong
					}
					vm.status = '';
				})
		}
	}
})();

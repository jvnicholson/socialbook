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

			statusService.updateStatus(newStatus)
				.then(function (response) {
					var result = response.data;

					// todo: let the user know something went wrong.
					vm.error = (result.success !== 'success');
					if (result.status === 'success') {
						vm.statusLabel = newStatus;
					}
					vm.status = '';
				})
		}
	}
})();

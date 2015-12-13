(function () {
	'use strict';

	angular.module('socialbook')
		.factory('statusService', ['$q', statusService]);

	function statusService($q) {
		return {
			updateStatus: updateStatus
		};

		function updateStatus(status) {
			// Save status on server.
			return $q.when({ data: { status: 'success'}});
		}
	}

})();

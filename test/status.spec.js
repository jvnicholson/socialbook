describe('StatusController', function() {
	var statusController, scope, statusService, q;

	beforeEach(module('socialbook'));
	// Mock out fake service
	beforeEach(function () {
		statusService = {
			updateStatus: function () {
				var deferred = q.defer();
				deferred.resolve({
					data: { status: 'success' }
				});
				return deferred.promise;
			}
		};
		spyOn(statusService, 'updateStatus').and.callThrough();
	});
	beforeEach(inject(function($controller, $rootScope, $q) {
		q = $q;
		scope = $rootScope.$new();
		statusController = $controller('statusController', {
			$scope: scope,
			statusService: statusService
		});
	}));

	it('should have a default status', function() {
		var statusLabel = statusController.statusLabel;
		expect(statusLabel).toBeDefined();
		expect(statusLabel.length).toBeGreaterThan(0);
	});

	describe('update method', function() {

		it('should not update statusLabel when no status is entered', function() {
			var statusLabel = statusController.statusLabel;
			statusController.update();
			scope.$digest();
			expect(statusController.statusLabel).toEqual(statusLabel);
		});

		it('should set statusLabel to status after successful service call', function () {
			var originalStatus = statusController.statusLabel;
			var newStatus = 'Hello there!';

			statusController.update(newStatus);
			scope.$digest();

			expect(statusService.updateStatus).toHaveBeenCalled();
			expect(statusController.statusLabel).not.toEqual(originalStatus);
			expect(statusController.statusLabel).toEqual(newStatus);
		});

		it('should clear the status property after it is called', function () {
			statusController.status = 'Hello';

			statusController.update(statusController.status);
			scope.$digest();
			expect(statusController.status).toEqual('');
		});
	});
});
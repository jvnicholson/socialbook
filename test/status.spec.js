describe('Status Feature', function() {
	beforeEach(module('socialbook'));

	describe('StatusController', function() {
		var statusController, scope;
		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			statusController = $controller('statusController', { $scope: scope });
		}));

		it('should have a default status', function() {
			var statusLabel = statusController.statusLabel;
			expect(statusLabel).toBeDefined();
			expect(statusLabel.length).toBeGreaterThan(0);
		});
	});
})
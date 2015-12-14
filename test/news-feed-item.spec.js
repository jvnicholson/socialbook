describe('NewsFeedItemController', function () {
	var newsFeedItemController, scope;

	beforeEach(module('socialbook'));

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		scope.data = {
			name: {first: "Josh", last: "Nicholson"},
			status: 'Hello there',
			timestamp: new Date()
		};
		newsFeedItemController = $controller('newsFeedItemController', {
			$scope: scope
		});
	}));

	it('default properties should be initialized with directive scope values', function() {
		var vm = newsFeedItemController;
		expect(vm.fullName).toEqual(scope.data.name.first + " " + scope.data.name.last);
		expect(vm.status).toEqual(scope.data.status);
		expect(vm.timestamp).toBeDefined();
	});
});
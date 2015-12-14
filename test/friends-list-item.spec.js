describe('FriendsListItemController', function () {
	var friendsListItemController, scope;

	beforeEach(module('socialbook'));

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		scope.friend = {
			name: {first: "Josh", last: "Nicholson"}
		};
		friendsListItemController = $controller('friendsListItemController', {
			$scope: scope
		});
	}));

	it('default properties should be initialized with directive scope values', function() {
		var vm = friendsListItemController;
		expect(vm.firstName).toEqual(scope.friend.name.first);
		expect(vm.lastName).toEqual(scope.friend.name.last);
	});
});
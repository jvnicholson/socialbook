describe('FriendsListController', function () {
	var friendsListController, scope, friendsListService, q;

	beforeEach(module('socialbook'));
	
	// Mock out fake service
	beforeEach(function () {
		friendsListService = {
			getFriends: function () {
				var deferred = q.defer();
				deferred.resolve({
					data: [
						{
							"timestamp": "Monday, December 14, 2015 12:10 AM",
							"status": "A creative man is motivated by the desire to achieve, not by the desire to beat others. - Ayn Rand",
							"name": {
								"last": "Lambert",
								"first": "Eve"
							},
							"id": 0
						},
					]
				});
				return deferred.promise;
			}
		};
		spyOn(friendsListService, 'getFriends').and.callThrough();
	});

	beforeEach(inject(function ($controller, $rootScope, $q) {
		q = $q;
		scope = $rootScope.$new();
		friendsListController = $controller('friendsListController', {
			$scope: scope,
			friendsListService: friendsListService
		});
	}));

	it('should call friendsListService upon instantiation', function () {
		expect(friendsListService.getFriends).toHaveBeenCalled();
	});
});
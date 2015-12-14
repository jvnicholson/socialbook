describe('NewsFeedController', function () {
	var newsFeedController, scope, newsFeedService, q;

	beforeEach(module('socialbook'));
	
	// Mock out fake service
	beforeEach(function () {
		newsFeedService = {
			getNewsFeed: function () {
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
		spyOn(newsFeedService, 'getNewsFeed').and.callThrough();
	});

	beforeEach(inject(function ($controller, $rootScope, $q) {
		q = $q;
		scope = $rootScope.$new();
		newsFeedController = $controller('newsFeedController', {
			$scope: scope,
			newsFeedService: newsFeedService
		});
	}));

	it('should call newsFeedService upon instantiation', function () {
		expect(newsFeedService.getNewsFeed).toHaveBeenCalled();
	});
});
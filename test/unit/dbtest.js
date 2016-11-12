/**Author: Ronald EKambi
	test the database connectivity
*/
it('demonstrate db connectivity', inject(function($http, $httpBackend){
	var $scope = {};
	$scope.valid = false;
	$http.get('./app/phpscripts/loadtags.php').success(function(recipedata, status, headers, config){
		console.log(recipedata);
		$scope.valid = true;
		$scope.response = recipedata;
	});
	$httpBackend.when('GET', './app/phpscripts/loadtags.php').respond(200, {db: 'connected'});
	$httpBackend.flush();
	expect($scope.response).toEqual({db: 'connected'});

}));

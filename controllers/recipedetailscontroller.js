/**
	Author: Ronald Ekambi 
	Purpose of file: provides routes for application. 
	Define which file should be loaded depeding on URL 
**/
app.controller('recipesDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	
	$http.get('data.json').then(function(recipedata){
		$scope.list = recipedata.data;		
	});
	$scope.whichItem = $routeParams.recipeid;
	$scope.recipeid = $routeParams.recipeid;
	$scope.testVar = '';
	$scope.checkInvalidId = function(){
		if($scope.list.length <= $scope.recipeid){
			$scope.testVar = 'Invalid';
			console.log($scope.testVar+"testbar");
		}else{
			$scope.testVar = 'Valid';
			console.log($scope.testVar+"testbar");
		}
	};
	console.log($scope.whichItem);
	$scope.$on('$routeChangeSuccess', function(){
		$scope.whichItem = $routeParams.recipeid;
	});
	console.log($scope.whichItem);
	
}]);
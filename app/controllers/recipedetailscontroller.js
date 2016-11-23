/**
	Author: Ronald Ekambi 
	Purpose of file: provides routes for application. 
	Define which file should be loaded depeding on URL 
**/
app.controller('recipesDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	//requesting data from the database and save it to list variable that will be used 
	//in the html to generate the list or show details
	$http.get('recipedata.php').then(function(recipedata){
		$scope.list = recipedata.data;		
	});
	//used to filter for the right details
	$scope.whichItem = $routeParams.recipeid;
	$scope.recipeid = $routeParams.recipeid;
	$scope.testVar = '';
	//sole purpose of this function is to check if 
	$scope.checkInvalidId = function(){
		if($scope.list.length <= $scope.recipeid){
			$scope.testVar = 'Invalid';
			console.log($scope.testVar+"testbar");
		}else{
			$scope.testVar = 'Valid';
			console.log($scope.testVar+"testbar");
		}
	};
	//debug messages
	console.log($scope.whichItem);
	//save the recipeid once the application successful changes route
	$scope.$on('$routeChangeSuccess', function(){
		$scope.whichItem = $routeParams.recipeid;
	});
	//debug messages
	console.log($scope.whichItem);
	
}]);
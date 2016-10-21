/**
	Author: Ronald Ekambi 
	Purpose of file: provides routes for application. 
	Define which file should be loaded depeding on URL 
**/
app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('data.json').then(function(recipedata){
		$scope.list = recipedata.data;		
	});
}])
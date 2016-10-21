/**
	Author: Ronald Ekambi 
	Purpose of file: provide data for the list of recipes
**/
app.controller('listOfRecipesCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('data.json').then(function(recipedata){
		$scope.list = recipedata.data;		
	});
}])
/**
	Author: Ronald Ekambi 
	Purpose of file: provide data for the list of recipes
**/
app.controller('listOfRecipesCtrl', ['$scope', '$http', function($scope, $http){
	
	//request data through php from database and saves it in list
	$http.get('recipedata.php').then(function(recipedata){
		$scope.list = recipedata.data;		
	});
}])
/**
	Author: Ronald Ekambi 
	Purpose of file: provide data for the list of recipes. Request data from the database 
	
**/
app.controller('listOfRecipesCtrl', ['$scope', '$http', function($scope, $http){
	console.log("Ron logs");
	//request data through php from database and saves it in list
	$http.get('recipedata.php').then(function(recipedata){
		$scope.list = recipedata.data;		
		console.log("Ron Logs "+ $scope.list);
	});
}])
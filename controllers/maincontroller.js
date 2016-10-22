/**
	Author: Ronald Ekambi 
	Purpose of file: 
**/
app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('recipedata.php').then(function(recipedata){
		$scope.list = recipedata.data;		
	});
}])
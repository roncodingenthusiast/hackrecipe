/**
	Author: Ronald Ekambi 
	Purpose of file: just test data.json
**/
app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('data.json').then(function(recipedata){
		$scope.list = recipedata.data;
		console.log($scope.list);		
	});
}])
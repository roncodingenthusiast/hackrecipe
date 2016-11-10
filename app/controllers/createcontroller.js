app.controller('createCtrl', ['$scope', '$http', function($scope, $http){
	$scope.tags;
	$scope.ingredients;
	$scope.loadTags = function(){
		$http.get('/hackrecipe/app/phpscripts/loadtags.php').then(function(tagData){
			$scope.tags = tagData.data;			
		});
	}
	$scope.loadTags();

	$scope.loadIngredients = function(){
		$http.get('/hackrecipe/app/phpscripts/loadingredients.php').then(function(ingData){
			$scope.ingredients = ingData.data;
			
		});
	}
	$scope.loadIngredients();
}])
/**
	Author: Ronald Ekambi 
	Purpose of file: provide data for the list of recipes. Request data from the database 
	
**/
app.controller('listOfRecipesCtrl', ['$scope', '$http', function($scope, $http){
	//request data through php from database and saves it in list
	$http.get('recipedata.php').then(function(recipedata){
		$scope.list = recipedata.data;
	});
	$scope.deleteRecipe = function (recipe_id) {
		if (!confirm('Are you sure you want to delete this recipe?')) {
			console.log("recipe is about to delete");
			return;
		}

		$.ajax({
			url: '/hackrecipe/app/phpscripts/deleterecipe.php?id='+recipe_id,
			type: 'DELETE',
			success: function (result) {
				$scope.loadData();
			}
		});
	};
	$scope.loadData = function () {
		$http.get('/hackrecipe/app/recipedata.php').then(function (recipedata) {
			$scope.list = recipedata.data;
		});
	};
}]);

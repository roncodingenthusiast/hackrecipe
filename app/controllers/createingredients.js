app.controller('createIngredientCtrl', ['$scope', '$http', function($scope, $http){
	console.log("saw my controller working");
	$scope.ingredients;
	$scope.loadIngredients = function(){
		$http.get('/hackrecipe/app/phpscripts/loadingredients.php').then(function(ingData){
			$scope.ingredients = ingData.data;
			
		});
	}
	$scope.loadIngredients();
	$scope.createIngredient = function(ingname){
		$scope.data = {"text": ingname};
		$http({
			method: 'POST',
			url : '/hackrecipe/app/phpscripts/createingredient.php',
			data : $scope.data, 
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		})
		.success(function(data){
			console.log("successfully went to php file and back");
			console.log(data);
			if(data.errors){
				$scope.errorTag = data.errors.tagerror;
				
			}else{
				$scope.loadTags();
			}
		});
	}
	$scope.deleteIngredient = function(ingid){
		$scope.data = {"id": ingid};
		$http({
			method: 'POST',
			url : '/hackrecipe/app/phpscripts/deleteingredient.php',
			data : $scope.data, 
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		})
		.success(function(data){
			console.log("successfully went to php file and back");
			console.log(data);
			$scope.loadIngredients();
		});
	}
}])
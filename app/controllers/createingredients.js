/** Author: Ronald Ekambi 
	Purporse: this file define the controller for the page to create ingredients
**/
app.controller('createIngredientCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.ingredients;
	//loads all the incredient and saves it to a scope variable so the html has access to it. 
	$scope.loadIngredients = function(){
		$http.get('/hackrecipe/app/phpscripts/loadingredients.php').then(function(ingData){
			$scope.ingredients = ingData.data;
			
		});
	}
	$scope.loadIngredients();
	//create an ingredient gets the name, submits via post to a php file and gets result the function
	$scope.createIngredient = function(ingname){
		$scope.data = {"text": ingname};
		$http({
			method: 'POST',
			url : '/hackrecipe/app/phpscripts/createingredient.php',
			data : $scope.data, 
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		})
		//if successful communication with php file
		.success(function(data){
			//if php file sends error
			if(data.errors){
				$scope.errorIng = data.errors.ingerror;	
			}else{
				//reloads the ingredient so we are able to see the new ingredient directly.
				$scope.loadIngredients();
			}
		});
	}
	//delete an ingredient gets the id of the ingredients and submits via a post and gets result of the deletion
	$scope.deleteIngredient = function(ingid){
		$scope.data = {"id": ingid};
		$http({
			method: 'POST',
			url : '/hackrecipe/app/phpscripts/deleteingredient.php',
			data : $scope.data, 
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		})
		.success(function(data){
			//reloads the ingredient so we are able to see the deleted ingredient disappear.
			$scope.loadIngredients();
		});
	}
}])
/** Author: Ronald Ekambi 
	Purporse: this file define the controller for the page to create recipes
**/
app.controller('createCtrl', ['$scope', '$http', function($scope, $http){
	$scope.tags;
	$scope.ingredients;
	//the function below call the php file loadtags.php which returns a json object of all the tags and 
	//all these tags are saved in the tags object and access by the html file
	$scope.loadTags = function(){
		$http.get('/hackrecipe/app/phpscripts/loadtags.php').then(function(tagData){
			$scope.tags = tagData.data;			
		});
	}
	$scope.loadTags();
	//the function below call the php file loadingredients.php which returns a json object of all the ingredients and 
	//all these tags are saved in the tags object and access by the html file
	$scope.loadIngredients = function(){
		$http.get('/hackrecipe/app/phpscripts/loadingredients.php').then(function(ingData){
			$scope.ingredients = ingData.data;
			
		});
	}
	$scope.loadIngredients();
}])
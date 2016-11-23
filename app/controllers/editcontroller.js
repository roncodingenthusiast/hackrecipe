app.controller('editCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$scope.tags;
	$scope.ingredients;
	//requesting data from the database and save it to list variable that will be used 
	//in the html to generate the list or show details
	$http.get('recipedata.php').then(function(recipedata){
		$scope.list = recipedata.data;		
	});
	//the function below call the php file loadtags.php which returns a json object of all the tags and 
	//all these tags are saved in the tags object and access by the html file
	$scope.loadTags = function(){
		$http.get('/hackrecipe/app/phpscripts/loadtags.php').then(function(tagData){
			$scope.tags = tagData.data;			
		});
	}
	$scope.whichItem = $routeParams.recipeid;
	$scope.recipeid = $routeParams.recipeid;
	//save the recipeid once the application successful changes route
	$scope.$on('$routeChangeSuccess', function(){
		$scope.whichItem = $routeParams.recipeid;
	});
	$scope.loadTags();
		//the function below call the php file loadingredients.php which returns a json object of all the ingredients and 
	//all these tags are saved in the tags object and access by the html file
	$scope.loadIngredients = function(){
		$http.get('/hackrecipe/app/phpscripts/loadingredients.php').then(function(ingData){
			$scope.ingredients = ingData.data;
			
		});
	}
	$scope.loadIngredients();
	$scope.editRecipe  = function(editrecipedata){
		console.log("here is the recipe data");
		console.log(editrecipedata);
		if(editrecipedata != null){
			editrecipedata.id = $scope.list[$scope.whichItem].id;
			$http({
				method: 'POST',
				url: '/hackrecipe/app/phpscripts/editrecipe.php',
				data: editrecipedata, 
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data){
				$location.path('/listRecipes');
			});
		}
	}
}]);

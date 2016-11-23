/**
	Author: Ronald Ekambi 
	Purpose of file: provides routes for application. 
	Define which file should be loaded depeding on URL that is requested by user 
	it also defines which controller is use for each route. 
**/
app.config(function($routeProvider){
	//when the user initially access the application it goes to home
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'mainCtrl'
	})
	.when('/listRecipes',{
		templateUrl: 'templates/recipeslist.html', 
		controller: 'listOfRecipesCtrl'

	}).when('/recipesDetails/:recipeid', {
		templateUrl: 'templates/recipesdetails.html',
		controller: 'recipesDetailsCtrl'
	})
	.when('/editrecipe/:recipeid', {
		templateUrl: 'templates/editrecipe.html',
		controller: 'editCtrl'
	})
	.when('/credit',{
		templateUrl: 'templates/credit.html',
		controller: 'creditCtrl'
	})
	.when('/createrecipe', {
		templateUrl: 'templates/createrecipe.html',
		controller: 'createCtrl'
	})
	.when('/createtag', {
		templateUrl: 'templates/createtag.html',
		controller: 'createTagCtrl'
	})
	.when('/createingredient', {
		templateUrl: 'templates/createingredient.html',
		controller: 'createIngredientCtrl'
	})
	//if the route is not recognised then it redirects you to home page
	.otherwise({
		redirecTo: '/'
	});
});
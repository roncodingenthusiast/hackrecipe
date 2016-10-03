var app = angular.module('angularMainApp', ['ngRoute']);

app.controller('listOfRecipes', ['$scope', function($scope){}]);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'listOfRecipes'
	})
});
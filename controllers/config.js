/**
	Author: Ronald Ekambi 
	Purpose of file: provides routes for application. 
	Define which file should be loaded depeding on URL 
**/
app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'mainCtrl'
	})
	.when('/listQuestions',{
		templateUrl: 'templates/questionslist.html', 
		controller: 'listOfQuestionsCtrl'

	}).when('/questionsDetails/:questionid', {
		templateUrl: 'templates/questionsdetails.html',
		controller: 'questionsDetailsCtrl'
	})
	.when('/login', {
		templateUrl: 'templates/login.html', 
		controller: 'loginCtrl'
	})
	.when('/register', {
		templateUrl: 'templates/register.html', 
		controller: 'registerCtrl'
	})
	.when('/quiz',{
		templateUrl: 'templates/quiz.html',
		controller: 'quizctrl'
	})
	//if the route is not recognised then it redirects you to home page
	.otherwise({
		redirecTo: '/'
	});
});
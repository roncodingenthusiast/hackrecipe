app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'resources/templates/home.html',
		controller: 'mainCtrl'
	})
	.when('/listQuestions',{
		templateUrl: 'resources/templates/questionslist.html', 
		controller: 'listOfQuestionsCtrl'

	}).when('/questionsDetails/:questionid', {
		templateUrl: 'resources/templates/questionsdetails.html',
		controller: 'questionsDetailsCtrl'
	})
	.when('/login', {
		templateUrl: 'resources/templates/login.html', 
		controller: 'loginCtrl'
	})
	.when('/register', {
		templateUrl: 'resources/templates/register.html', 
		controller: 'registerCtrl'
	})
	.when('/quiz',{
		templateUrl: 'resources/templates/quiz.html',
		controller: 'quizctrl'
	})
	.otherwise({
		redirecTo: '/listQuestions'
	});
});
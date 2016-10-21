app.controller('questionsDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	
	$http.get('/codebees-anticorruption/quizdata.php').then(function(quizdata){
		$scope.list = quizdata.data;		
	});
	$scope.whichItem = $routeParams.questionid;
	console.log($scope.whichItem);
	$scope.$on('$routeChangeSuccess', function(){
		$scope.whichItem = $routeParams.questionid;
	});
	console.log($scope.whichItem);
	
}]);
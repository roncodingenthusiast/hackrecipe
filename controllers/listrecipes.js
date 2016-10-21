app.controller('listOfRecipesCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/codebees-anticorruption/quizdata.php').then(function(quizdata){
		$scope.list = quizdata.data;	
	});
}])
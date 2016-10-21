app.controller('quizctrl', ['$scope', '$http','$sce', function($scope, $http,  $sce){
	
	$scope.score = 0;
	$scope.activeQuestion = -1;
	$scope.activeQuestionAnswered = 0;
	$scope.percentage = 0;

	$http.get('/codebees-anticorruption/quizdata.php').then(function(quizdata){
		$scope.myQuestions = quizdata.data;
		$scope.totalQuestions = $scope.myQuestions.length;
	});

	$scope.selectAnswer = function(parentIndex, answerIndex){
		console.log(parentIndex + " answer: " + answerIndex);

		var questionState = $scope.myQuestions[parentIndex].questionState;
		

		if(questionState != 'answered'){
			$scope.myQuestions[parentIndex].selectedAnswer = answerIndex;
			var correctAnswer =  $scope.myQuestions[parentIndex].answers[answerIndex].is_correct;
			
			if(correctAnswer == 1){
				$scope.myQuestions[parentIndex].correctAnswer = answerIndex;
				$scope.myQuestions[parentIndex].correctness = 'correct';
				$scope.score += 1;
			}else{
				$scope.myQuestions[parentIndex].correctness = 'incorrect';
				$scope.myQuestions[parentIndex].answers.forEach(function(value, i){
					console.log("i: "+i + " value "+value);
					if(value.is_correct == 1){
						$scope.myQuestions[parentIndex].correctAnswer = i;
					}
				});
				
			}

			$scope.myQuestions[parentIndex].questionState = 'answered';
		}else{
			$scope.myQuestions[parentIndex].questionState = '';
		}

		$scope.percentage = ($scope.score/$scope.totalQuestions)*100;
	};
	$scope.isSelected = function(parentIndex, answerIndex){
		return $scope.myQuestions[parentIndex].selectedAnswer === answerIndex;
	};
	$scope.isCorrect = function(parentIndex, answerIndex){
		return $scope.myQuestions[parentIndex].correctAnswer === answerIndex;
	};
	$scope.selectContinue = function(){
		console.log("active question "+$scope.activeQuestion);
		return $scope.activeQuestion += 1;
	};

}]);
app.controller('createTagCtrl', ['$scope', '$http', function($scope, $http){
	
	console.log("saw my controller working");
	$scope.tags;
	$scope.loadTags = function(){
		$http.get('/hackrecipe/app/phpscripts/loadtags.php').then(function(tagData){
			$scope.tags = tagData.data;
			
		});
	}
	$scope.loadTags();
	$scope.createTag = function(tagname){
		$scope.data = {"text": tagname};
		$http({
			method: 'POST',
			url : '/hackrecipe/app/phpscripts/createtag.php',
			data : $scope.data, 
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		})
		.success(function(data){
			console.log("successfully went to php file and back");
			console.log(data);
			if(data.errors){
				$scope.errorTag = data.errors.tagerror;
				
			}else{
				$scope.loadTags();
			}
		});
	}
	$scope.deleteTag = function(tagid){
		$scope.data = {"id": tagid};
		$http({
			method: 'POST',
			url : '/hackrecipe/app/phpscripts/deletetag.php',
			data : $scope.data, 
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		})
		.success(function(data){
			console.log("successfully went to php file and back");
			console.log(data);
			$scope.loadTags();
		});
	}
}])
/** 
	Author: Ronald Ekambi
	Purpose: Creates a controller for the create tag page
**/
app.controller('createTagCtrl', ['$scope', '$http', function($scope, $http){

	$scope.tags;
	//loads all the tags from the database via a post submition to a php file
	$scope.loadTags = function(){
		$http.get('/hackrecipe/app/phpscripts/loadtags.php').then(function(tagData){
			$scope.tags = tagData.data;
			
		});
	}
	$scope.loadTags();
	//gets a new tag name and submits  via post to the createtag.php script
	$scope.createTag = function(tagname){
		$scope.data = {"text": tagname};
		$http({
			method: 'POST',
			url : '/hackrecipe/app/phpscripts/createtag.php',
			data : $scope.data, 
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		})
		//in case of successfull communication with php file/server
		.success(function(data){
			//if any errors, save it to the errortag and this errortag will show up in the html since 
			//it has a placeholder
			if(data.errors){
				$scope.errorTag = data.errors.tagerror;
				
			}else{
				//reload the tags to see the changes
				$scope.loadTags();
			}
		});
	}
	//gets a tag id and submits via post to a deletetag.php script to delete the tag.
	$scope.deleteTag = function(tagid){
		$scope.data = {"id": tagid};

		$http({
			method: 'POST',
			url : '/hackrecipe/app/phpscripts/deletetag.php',
			data : $scope.data, 
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		})
		//in case of successful communication with php server. show results and reload tags
		.success(function(data){
			//reload tags to see the changes.
			$scope.loadTags();
		});
	}
}])
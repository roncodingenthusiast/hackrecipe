/** Author: Ronald Ekambi
	Filename: test.js
	Purpose: Unit testing of controllers, routing**/

//this test takes care of the recipesDetailsCtrl 
describe('recipesDetailsCtrl', function(){
	//injecting this test in the angularMainApp
	beforeEach(module('angularMainApp')); 
	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	describe('$scope.checkInvalidId', function(){
		it('it sets invalid if the number is greater than the actual number in the list', function(){
			var $scope = {};
      		var controller = $controller('recipesDetailsCtrl', { $scope: $scope });
      		$scope.recipeid = 56;
      		$scope.checkInvalidId();
      		expect($scope.testVar).toEqual('Invalid');
		});
	});
	describe('$scope.checkInvalidId', function(){
		it('it sets valid if the number is smaller than the actual number of recipes in the list', function(){
			var $scope = {};
      		var controller = $controller('recipesDetailsCtrl', { $scope: $scope });
      		$scope.recipeid = 1;
      		$scope.checkInvalidId();
      		expect($scope.testVar).toEqual('Valid');
		});
	});
});
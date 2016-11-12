/**Author: Ronald EKambi
	test the createcontroller.js
*/
describe('checking creditcontroller', function(){
	var scope, controller;
	beforeEach(
		module('angularMainApp')
	); 
	describe('server request ', function(){
		beforeEach(inject(function($rootScope, $controller){
			
			scope = $rootScope.$new();
			controller = $controller;
			
			controller = $controller('createCtrl', {
				'$scope':scope
			});
			scope.$digest();
		}));

	});
	

}); 
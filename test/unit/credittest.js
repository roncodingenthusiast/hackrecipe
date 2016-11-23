/**Author: Ronald EKambi
	test the credit controller
*/
describe('checking creditcontroller', function(){
	var scope, controller;
	beforeEach(
		module('angularMainApp')
	); 
	describe('server request ', function(){
		beforeEach(inject(function($rootScope, $controller){
			
			scope = $rootScope.$new();
			console.log(scope);
			controller = $controller;
			
			controller = $controller('creditCtrl', {
				'$scope':scope
			});
			scope.$digest();
		}));
		it('from the the number in the controller', function(){
				expect(scope.number).toBe(1);

		});
	});
	

}); 
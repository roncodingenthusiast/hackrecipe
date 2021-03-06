/** Author: Ronald Ekambi
    Purpose: Specify what browser and what testing framework needed 
    and the place where unit test reside in my app directory*/ 
module.exports = function(config){
	config.set({
		frameworks: ['jasmine'], //testing framework 
		browsers: ['Firefox'], //browser in which unit test will be run
		//we set files karma will load as part of running the unit test.
		files: [
			
			'app/library/angular/angular.min.js',
			'app/library/angular/angular-mocks.js',
			'app/library/angular/angular-route.min.js',
			'app/app.js',
			'app/controllers/*.js',
			'test/unit/*.js'

		]
	});
};
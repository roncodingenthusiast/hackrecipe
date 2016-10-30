module.exports = function(config){
	config.set({
		frameworks: ['jasmine'], //testing framework 
		browsers: ['Firefox'], //browser in which unit test will be run
		//we set files karma will load as part of running the unit test.
		files: [
			'test/unit/*.js'
		]
	});
};
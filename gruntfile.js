/**
	Author; Ronald Ekambi 
	Purpose: export config to grunt and points to the karma config file
*/
module.exports = function(grunt){
	grunt.initConfig({
		karma: {
			//we only have one task within karma calld unit
			unit: {
				configFile: 'karma-unit.conf.js'
			}
		}
	});
	//load up tasks from grunt-karma 
	grunt.loadNpmTasks('grunt-karma');
};
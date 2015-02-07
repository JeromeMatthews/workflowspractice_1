module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({

		uglify:{
			my_target: {
				files: { 'js/production_scripts.js': ['_/components/js/*.js']}//files : {'dest':['src']}
			}//my_target
		},//uglify

	});//initConfig
	grunt.registerTask('default', 'uglify');
};//exports

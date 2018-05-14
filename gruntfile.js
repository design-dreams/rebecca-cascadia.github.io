//The "wrapper" function
module.exports = function(grunt) {
  
	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), // need comma between
        sass: {                              
            dist: {                     
                options: {                      
                    style: 'expanded'
                },
                files: {                       
                'css/nav.css': 'assets/scss/nav.scss',   // 'destination': 'source'
                }
            }
        }
        watch: {
            scripts: {
                files: '**/*.js',
                tasks: ['generateFileManifest'],
                options: {
                    event: ['all'],
                    interrupt: true,
                }
            }
        }
    });

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
	grunt.registerTask('default', ['sass','watch']);
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

};

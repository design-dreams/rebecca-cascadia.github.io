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
                'css/nav.css': 'assets/scss/nav.scss'   // 'destination': 'source'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                'js/animate.min.js': ['assets/js/animate.js']
                }
            }
        },
        watch: {      
            configFiles: {
                files: [ 'assets/scss/nav.scss' ],
                tasks: ['sass'],   //runs sass task from above
                options: {
                  event: ['all'],
                  reload: true
                }
            }
        },
        jshint: {
            all: ['assets/js/*.js']
        }
        
    });

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['sass','uglify','jshint','watch']);
    //watch needs to be last, runs in order
    
    

};

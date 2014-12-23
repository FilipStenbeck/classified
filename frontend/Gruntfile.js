module.exports = function (grunt) {
  
	grunt.initConfig({

	    browserify: {
	  		dist: {
	    		files: {
	      			'build/browserify-bundle.js': ['js/app.js'],
	      			'test/build/specs.js': ['test/spec/index.js']
	    		},
	    		options: {
	    		}
	  		}
		},
		
		clean: ["build/", "test/build/"],

		watch: {
	  		scripts: {
	    		files: ['js/**/*.js', 'test/spec/**/*.js'],
	    		tasks: ['browserify'],
	    			options: {
	      			spawn: false,
	    		},
	  		},
	  		livereload: {
              options: {
                  livereload: '<%= connect.options.livereload %>'
              },
              files: [
                  '*.html',
              'templates/{,*/}*.css',
                  'style/{,*/}*.css',
                  'build/browserify-bundle.js',
                  'test/build/specs.js'
              ]
            }
		},

        connect: {
          options: {
              port: 9001,
              livereload: 35729,
              hostname: 'localhost'
          },
          livereload: {
              options: {
                  open: true,
              }
          	}
      	},
      	// Project configuration.
 	 	uglify: {
    		options: {
      			mangle: false,
      			sourceMap: true
    		},
    		dist: {
      			files: {
        			'build/browserify-bundle.js': ['build/browserify-bundle.js']
      			}
    		}
  		}
 	});
  	
  	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');	

	grunt.registerTask('serve', ['build', 'connect:livereload', 'watch']);

	grunt.registerTask('build', ['clean', 'browserify', 'uglify']);

	// Default task(s)
	grunt.registerTask('default', ['serve']);
};
module.exports = function(grunt) {
	// Initialize configuration file
	grunt.initConfig({
		less: {
			plugins: {
				options: {
		            paths: [
		                'bower_components/bootstrap/less/'
		            ],
		            cleancss: false,
		            sourceMap: false
		        },
		        files: {
		            "css/plugins.css": "less/plugins.less"
		        }
			},
			app: {
				options: {
		            paths: [
		                'less/'
		            ],
		            cleancss: false,
		            sourceMap: false
		        },
		        files: {
		            "css/main.css": "less/main.less"
		        }
			}
		},
		uglify: {
			plugins: {
		        options: {
		            sourceMap: false,
		            sourceMapIncludeSources: true,
		            mangle: false,
		            beautify: true,
		            compress: false
		        },
		        files: {
		            'js/plugins.js': [
		                'bower_components/director/build/director.js'
		            ]
		        }
		    }
		},
		watch: {
			app_less: {
				files: ['less/**/*.less', '!less/plugins.less'],
				tasks: 'less:app'
			},
			plugin_less: {
				files: ['less/plugins.less'],
				tasks: 'less:plugins'
			}
		}
	});

	// Load our npm grunt tasks
  	grunt.loadNpmTasks('grunt-contrib-less');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-watch');
}
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
		}
	});

	// Load our npm grunt tasks
  	grunt.loadNpmTasks('grunt-contrib-less');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
}
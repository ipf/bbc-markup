/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		lint: {
			files: ['grunt.js']
		},
		qunit: {
			files: ['test/**/*.html']
		},
		concat: {
			dist: {
				src: [
					'Resources/Private/JavaScript/foundation/jquery.js',
					'Resources/Private/JavaScript/foundation/jquery.foundation.topbar.js',
					'Resources/Private/JavaScript/foundation/jquery.foundation.navigation.js',
					'Resources/Private/JavaScript/foundation/jquery.foundation.orbit.js',
					'Resources/Private/JavaScript/foundation/jquery.placeholder.js',
					'Resources/Private/JavaScript/foundation/jquery.foundation.reveal.js',
					'Resources/Private/JavaScript/foundation/jquery.foundation.tabs.js',
					'Resources/Private/JavaScript/foundation/jquery.foundation.buttons.js',
					'Resources/Private/JavaScript/foundation/jquery.foundation.alerts.js',
					'Resources/Private/JavaScript/foundation/jquery.foundation.forms.js',
					"Resources/Private/JavaScript/foundation/jquery.foundation.mediaQueryToggle",
					"Resources/Private/JavaScript/foundation/jquery.foundation.tooltips.js",
					"Resources/Private/JavaScript/foundation/jquery.placeholder.js",
					'Resources/Private/JavaScript/foundation/jquery.foundation.accordion.js',
					'Resources/Private/JavaScript/foundation/app.js',
					'node_modules/underscore/underscore.js',
					'node_modules/backbone/backbone.js',
					'node_modules/mustache/mustache.js',
					'Resources/Private/JavaScript/recline/dist.recline.js'
				],
				dest: 'Resources/Public/JavaScript/<%= pkg.name %>.js'
			}
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
				dest: 'Resources/Public/JavaScript/<%= pkg.name %>.min.js'
			}
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				jQuery: true
			}
		},
		uglify: {},
		compass: {
			prod: {
				src: 'Resources/Private/Sass/',
				dest: 'Resources/Public/Css',
				linecomments: false,
				outputstyle: 'expanded',
				forcecompile: true,
				debugsass: false,
				relativeassets: true,
				require: 'zurb-foundation'

			}
		},
		coffee: {
			app: {
				src: ['Resources/Private/CoffeeScript/*.coffee'],
				dest: 'Resources/Public/JavaScript',
				options: {
					bare: true
				}
			}
		}
	});

	// Default task.
	grunt.registerTask('default', 'coffee compass lint concat min');
	grunt.loadNpmTasks('grunt-compass');
	grunt.loadNpmTasks('grunt-coffee');
};

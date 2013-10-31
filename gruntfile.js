module.exports = function(grunt){

    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['index.html']
            }
        },

        uglify: {
            build: {
                files: {
                    /* Add some js files here
                      'build/js/base.min.js': ['assets/js/base.js']*/
                }
            }
        },

        cssmin: {
            build: {
                src: 'static/styles/styles.css',
                dest: 'build/css/styles.css'
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['static/**/*.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['static/**/*.css'],
                tasks: ['buildcss']
            }
        }
    });

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss',  ['cssmin']);

};
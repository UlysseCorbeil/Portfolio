module.exports = function (grunt) {

    'use strict';

    require('jit-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-include-source');

    var jsJsonFiles = grunt.file.readJSON('./public/js/js.json');
    var fixJsFilePath = function (f) {
        return './public/' + f;
    };
    var jsFiles = jsJsonFiles.modules.map(fixJsFilePath);

    grunt.initConfig({
        app: {
            scripts: jsFiles
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    './src/style/main.css': './src/style/main.less'
                }
            }
        },
        watch: {
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        },
        includeSource: {
            options: {
                basePath: './public',
                baseUrl: '',
                ordering: 'top-down',
                templates: {
                    html: {
                        js: '<script src="{' + jsFiles + '}"></script>'
                    }
                }
            },
            target: {
                files: {
                    './public/index.html': './public/index.html'
                }
            }
        }
    });

    grunt.registerTask('build', [
        'less',
        'watch',
        'inludeSource'
    ]);
};

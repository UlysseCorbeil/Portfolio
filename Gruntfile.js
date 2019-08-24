module.exports = function (grunt) {

    'use strict';

    require('jit-grunt')(grunt);
    grunt.loadNpmTasks('grunt-include-source');

    grunt.initConfig({
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
                    nospawn: true
                }
            }
        },
        includeSource: {
            options: {
                basePath: './public',
                templates: {
                    html: {
                        js: '<script src="{filePath}"</script>'
                    }
                }
            },
            myTarget: {
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
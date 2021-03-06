'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ['./counter.js']
    },

    simplemocha: {
      src: ['test/*.js']
    },

    jscs: {
      src: ['./counter.js'],
      options: {
        config: '.jscsrc'
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha', 'jscs']);
  grunt.registerTask('default', ['test']);
};

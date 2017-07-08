module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      yoyoserver: {
        options: {
          port: 9001,
          base: './',
          index: 'index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
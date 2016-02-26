module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        presets: ['es2015', 'react']
      },
      dist: {
        files: {
          'js/output.js': ['src/form.js']
          }
      }
    },

    uglify: {
      options: {
      },
      dist: {
        files: {
          'js/react.js': ['src/react.js', 'src/react-dom.js'],
          'js/app.js': ['js/output.js']
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['default']
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', ['babel', 'uglify']);

};
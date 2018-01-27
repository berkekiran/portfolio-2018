module.exports = function(grunt) {

  //Configure main project settings
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //cssmin
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

    //uglify
    uglify: {
       target: {
         options: {
            report: 'min',
            mangle: false
         },
         files: {
           'js/portfolio.min.js': ['js/portfolio.js']
         }
       }
    },

    //karma
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    //sass
    sass: {
      options: {
        sourceMap: true
      },
      target: {
      files: {
        'css/portfolio.css': 'css/portfolio.sass'
        }
      }
    },

    //watch
    watch: {
      uglify: {
        files: ['js/portfolio.min.js', 'js/portfolio.js'],
        tasks: ['uglify'],
      },
      sass: {
        files: ['css/*.sass'],
        tasks: ['sass', 'cssmin'],
      },
      livereload: {
        options: { livereload: true },
        files: ['css/*'],
      },
      scripts: {
        files: ['js/*.js'],
      options: {
      spawn: false,
      },
    },
  },

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['cssmin', 'uglify', 'sass', 'watch']);

};

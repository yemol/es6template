module.exports = function (config) {
  config.set({

    basePath: './',
    frameworks: ['browserify', 'jasmine'],
    browsers: [
      'PhantomJS'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-browserify',
      'karma-jasmine'
    ],
    reporters: ['spec'],
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],

    exclude: [],

    logLevel: config.LOG_DEBUG,

    port: 8080,
    captureTimeout: 60000,
    singleRun: true,

    preprocessors: {
      'src/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },
    browserify: {
      transform: ['babelify']
    }
  });
};

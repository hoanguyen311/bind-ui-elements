// Karma configuration
// Generated on Tue May 31 2016 10:56:57 GMT+0700 (ICT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'test/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
        'test/*.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: {
        devtool: 'inline-source-map'
    },
    webpackMiddleware: {
        noInfo: true
    },
    reporters: [ 'mocha' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [ 'PhantomJS' ],
    singleRun: false,
    concurrency: Infinity
  })
}

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'listspec.js',
    'newspec.js'
    ],
    multiCapabilities: [{
        browserName: 'firefox'
      }, {
        browserName: 'chrome'
      }
    ]
};
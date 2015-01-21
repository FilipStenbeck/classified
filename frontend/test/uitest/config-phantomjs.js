/**
* 1) phantomjs --webdriver=9515'
* 2) protractor config-phantomjs.js
*
*/

exports.config = {
  seleniumAddress: 'http://localhost:9515/wd/hub',
  specs: [
    'listspec.js',
    'newspec.js'
    ],

   capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  }
};
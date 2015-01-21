/**
* 1) webdriver-manager start
* 2) protractor config.js
*
*/

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    'listspec.js',
    'newspec.js'
    ],

    multiCapabilities: [
      /*{
        browserName: 'firefox'
      },*/
      {
        browserName: 'chrome'
      }
    ]

};
/**
 * Config dependencies
 */
var Nightwatch = require('./node_modules/nightwatch/index');
var Utils = require('./node_modules/nightwatch/lib/util/utils');

try {
  Nightwatch.cli(function(argv) {
    // eslint-disable-next-line
    argv._source = argv['_'].slice(0);
    Nightwatch.runner(argv);
  });
} catch (ex) {
  Utils.showStackTraceWithHeadline('There was an error while starting the test runner:\n', ex.stack + '\n', true);
  // eslint-disable-next-line
  process.exit(2);
}
var Mocha = require('mocha');
const mocha = new Mocha();
const cleanup = require('jsdom-global')();
var mochSanp = require('./../index');



module.exports = {
    after: function (browser) {
      cleanup();
      global.html="";
      browser.end();
    },
    'JSD-DOM': function (browser) {
        browser
            .url("https://www.npmjs.com/")
            .source(async (result) => {
                global.html="";
                // eslint-disable-next-line
                browser.pause(9000);
                document.write(result.value);
                global.html = document.querySelector('#flatpage').innerHTML;
                // eslint-disable-next-line
                browser.pause(3000);
                //for update 
                //mochSanp.update_snapshotConfig.update();
                await mochSanp.globalMochaHandler('./mocha-snapshot/snapshot.jest.js', mocha);

            });
    }
};
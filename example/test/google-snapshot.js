var Mocha = require('mocha')
const mocha = new Mocha();
const cleanup = require('jsdom-global')();
var mochSanp = require('./../../index');



module.exports = {
    after: function (browser) {
        cleanup();
        browser.end();
    },
    'JSD-DOM': function (browser) {
        browser
            .url("http://google.com")
            .source(async (result) => {
                document.write(result.value);
                global.html = document.querySelector('#SIvCob').innerHTML;
                browser.pause(3000);
                //mocha.addFile('./example/snapshot_case/google.jest.js');
                await mochSanp.globalMochaHandler('./example/snapshot_case/google.jest.js', mocha);
                mochSanp.mochaRun(mocha);

            })
    }
}
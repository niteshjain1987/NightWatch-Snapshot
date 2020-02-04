var snapshotConfig = require('./snapshot.config');
var update_snapshotConfig = require('./update_snapshot');
function globalMochaHandler(fileName, mocha) {
    //fileName=./mocha-snapshot/advance-workflow.jest.js
    return new Promise(function (resolve, reject) {
        try {
            mocha.addFile(fileName);
            mochaRun();
            resolve('done');
        }
        catch (err) {
            resolve('fail');
        }
    })
}
function mochaRun(mocha) {
    mocha.run()
        .on('test', function (test) {
            console.log('Test started: ' + test.title);
        })
        .on('test end', function (test) {
            console.log('Test done: ' + test.title);
        })
        .on('pass', function (test) {
            console.log(test);
        })
        .on('fail', function (test, err) {
            console.log(err);
        })
        .on('end', function () {
            console.log('All done');
        });
}
module.exports = {
    snapshotConfig: snapshotConfig,
    update_snapshotConfig: update_snapshotConfig,
    globalMochaHandler: globalMochaHandler,
    mochaRun: mochaRun
};
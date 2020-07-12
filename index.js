var snapshotConfig = require("./snapshot.config");
var update_snapshotConfig = require("./update_snapshot");
function globalMochaHandler(fileName, mocha) {
  //fileName=./mocha-snapshot/xxx.jest.js
  return new Promise(function (resolve, reject) {
    function mochaRun(mocha) {
      mocha
        .run()
        .on("test", function (test) {
          // eslint-disable-next-line
          console.log("Test started: " + test.title);
        })
        .on("test end", function (test) {
          // eslint-disable-next-line
          console.log("Test done: " + test.title);
        })
        .on("pass", function (test) {
          // eslint-disable-next-line
          console.log(test);
        })
        .on("fail", function (test, err) {
          // eslint-disable-next-line
          console.log(err);
        })
        .on("end", function () {
          // eslint-disable-next-line
          console.log("All done");
        });
    }
    try {
      mocha.addFile(fileName);
      mochaRun(mocha);
      resolve("done");
    } catch (err) {
      resolve("fail");
    }
  });
}

module.exports = {
  snapshotConfig: snapshotConfig,
  update_snapshotConfig: update_snapshotConfig,
  globalMochaHandler: globalMochaHandler,
};

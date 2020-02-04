const snapshot = require('snap-shot');
const regex = /<!--(.*?)-->/gm;
var html = String(global.html).replace(regex, "").replace(/(<[^>]+) style=".*?"/ig, '').replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
describe('Snapshot', function () {
    it('Google Test', () => {
        return Promise.resolve(html)
            .then(data => {
                snapshot(data);
            })
    })
});


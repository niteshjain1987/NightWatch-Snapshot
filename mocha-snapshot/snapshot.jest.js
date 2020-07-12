const snapshot = require('snap-shot');
const regex = /<!--(.*?)-->/gm;
let html=String(global.html).replace(regex,"").replace(/(<[^>]+) style=".*?"/ig, '').replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,'');
describe('Test Project', function() {
it('npmjs.com test', () => {
    return Promise.resolve(html)
      .then(data => {
        html="";
        global.html="";
        snapshot(data);
        
        });
  });

});
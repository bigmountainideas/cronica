var cronica = require('../');
var path = require('path');

describe('commit', function(){

  it('should commit file changes to content branch,', function(done){

    c = cronica({
      repo: path.join(__dirname,'.content-repo-test')
    });

    c.commit( 'test.json', done);
    // done()

  });


});

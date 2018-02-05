var expect = require('chai').expect;
var utils = require('./mocha_utils');

describe('testing async functionslity', function(){
  it('test loading web page', function(done){
    utils.loadWiki({title:'Cryptocurrency'}, function(html){
      expect(html).to.be.ok;
      console.log('page loaded succesfully');
      done();
    }); //https://en.wikipedia.org/wiki/Cryptocurrency
  });
});

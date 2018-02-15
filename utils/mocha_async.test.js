var expect = require('chai').expect;
var utils = require('./mocha_utils');
var nock = require('nock');

describe('testing async functionslity', function(){
  before(function(){
    nock("https://en.wikipedia.org/")
    .get("/wiki/Cryptocurrency")
    .reply(200, "Mocking fake server");
  });
  it('test loading web page', function(done){
    utils.loadWiki({title:'Cryptocurrency'}, function(html){
      //expect(html).to.be.ok;
      expect(html).to.equal('Mocking fake server');
      console.log('page loaded succesfully');
      done();
    }); //https://en.wikipedia.org/wiki/Cryptocurrency
  });
});

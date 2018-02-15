var https = require('https');

module.exports = {
  loadWiki : function(name, callback){
    var url = `https://en.wikipedia.org/wiki/${name.title}`; //big mistake using just name
    https.get(url, function(res){                         //instead of name.title as name is an object
      var body = '';
      res.on('data', function(chunk){
        body += chunk;
      });
      res.on('end', function(){
        callback(body);
      })
    })
  }
};

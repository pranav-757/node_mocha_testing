var https = require('https');

module.exports = {
  loadWiki : function(name, callback){
    var url = `https://en.wikipedia.org/wiki/${name}`;
    https.get(url, function(res){
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

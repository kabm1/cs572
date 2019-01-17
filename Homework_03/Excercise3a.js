var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
      let content =  fs.readFileSync('bigfile.txt');
    res.end(content);
}).listen(4000, ()=> console.log('listening on 4000'));
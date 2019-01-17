var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
       fs.readFile('bigfile.txt',(err,data)=>{
            res.writeHead(200,{'Content-Type': 'text/html'});
           res.write(data);
            res.end();
})}).listen(4000, ()=> console.log('listening on 4000'));
var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    fs.createReadStream('smallfile.txt').pipe(res);
}).listen(3000,()=>console.log('listening on 3000'));
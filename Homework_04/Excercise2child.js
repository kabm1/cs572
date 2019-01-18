const fs = require('fs');
var content;

process.on('message', (msg)=>{
    content = fs.readFileSync('myfile.txt', 'utf8');
   
        process.send(content);
    });


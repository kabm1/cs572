const {Observable} = require('rxjs');
const http = require('http');
const urlo = require('url');
const fs = require('fs');
const {fork} = require ('child_process');

const request = Observable.create(function(observer){
    http.createServer((req,res)=>{
       let info = {req,res};
   observer.next(info);
}).listen(4000,console.log('listening on 4000'));});

request.subscribe(function(data){
  const childProcess = fork('childExcercise2.js');
  childProcess.send(urlo.parse(data.req.url));
  childProcess.on('message',function(content){
    data.res.write(content);
    data.res.end();
   })});
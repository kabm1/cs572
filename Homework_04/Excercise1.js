const {Observable} = require('rxjs');
const ops = require('os');

const checkSystem = Observable.create(function(observer){
    console.log('chekcing system');
    let core = ops.cpus().length;
    let mem = ops.totalmem()/1000000000;
    let info = {core,mem};
    observer.next(info);
    setTimeout(()=>{observer.complete();},3000);
});

const sub = checkSystem.subscribe(
    
    function(x) { if(x.mem < 4){
        console.log("This app needs at least 4b of Ram");
    }
    if(x.core < 8){
        console.log("Processor is not supported");
    }
else {
    console.log("System is checked sucessfuly");
}},
    function (err){console.error(err);},
    function (){console.info();}
);
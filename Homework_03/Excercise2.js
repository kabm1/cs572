var EventEmitter = require('events');

class gym extends EventEmitter {
    constructor(){
        super();
        setInterval(()=>{this.emit('Boom'),1000});
       }
      
}

var ngym = new gym();
ngym.on('Boom',function(){console.log('athlete is working out')});

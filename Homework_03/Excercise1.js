const {promisify} = require('util');
const mod  = require('dns');
mod.resolve4('www.mum.edu',(error,data)=>(console.log(data)));

///////////////////////////////

const convertasync = promisify(mod.resolve4);

convertasync('www.mum.edu')
    .then((data)=> {console.log(data)})
    .catch((err)=>{console.log(err)});
/////////////////////////

async function convert(){
    try {
        const text = await convertasync('www.mum.edu');
        console.log(text);
    }
    catch (err) {
        console.log(err);
    }
}
convert();
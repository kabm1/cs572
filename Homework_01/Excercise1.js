String.prototype.filterWords = function(param1){
    let output = this.split(" ");
    param1.map(word=>output = output.map(x=>x.replace(word,"*")));
    return output.join(" ");
}

console.log("This house is nice!".filterWords(["house", "nice"]));

//
String.prototype.filterWords2 = function(param1){
    let output = this.split(" ");
    return new Promise((resolve, reject)=>{
        param1.map(word=>output = output.map(x=>x.replace(word,"*")));
        resolve(output.join(" "));
    });
}
'This house is nice!'.filterWords2(["house","nice"])
    .then((x)=>{console.log(x)})
    .catch((error) => console.log(error));

   async function fword(){
        let output = await 'This house is nice!'.filterWords2(["house","nice"]);
        console.log(output);
    }
    fword();

    const {Observable}=require('rxjs')
    const {map,filter}=require('rxjs/operators');
    
    const output = Observable.create(function (value1){
        String.prototype.filterWords = function(param1){
            let output = this.split(" ");
            param1.map(word=>output = output.map(x=>x.replace(word,"*")));
            return output.join(" ");
        };
        value1.next("This house is nice!".filterWords("house","nice"))
    });
    output.subscribe(x=>console.log(x));

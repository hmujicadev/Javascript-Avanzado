/* //El constructor de una promesa
let p = new Promise(function (resolve,reject){
    //setTimeout(()=> resolve("listo!"),1000);
    setTimeout(()=> reject(new Error('Uy Rompio')),1000);

    })

p.then(
    function(result) {console.log(result)},
    function(error) {console.log(error)}
)
//Inicialmente una promesa => pending -> fullfield / reject */

let promesa = new Promise(function(resolve,reject){
    setTimeout(() => resolve(1),1000);
})


promesa.then(function (result){
    console.log(result);
    return result*2;
})
promesa.then(function (result){
    console.log(result);
    return result*2;
})

new Promise(function(resolve,reject){
    setTimeout(()=> resolve(1),1000)
}).then(function (result){
    console.log(result);
    return result*2;
}).then(function (result){
    console.log(result);
    return result*2;
}).then(function (result){
    console.log(result);
    return result*2;
})

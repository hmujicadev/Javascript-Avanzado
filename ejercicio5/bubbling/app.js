let c1 =document.querySelector('.clase1');
let c2 =document.querySelector('.clase2');
let c3 =document.querySelector('.clase3');

c1.addEventListener('click',function(){
    console.log('Click en DIV');
},true)
c2.addEventListener('click',()=>{
    console.log('Click en p');
},true)
c3.addEventListener('click',()=>{
    console.log('Click en input');
},false)
document.addEventListener('click',()=>{
    console.log('Click en documento');
},false)
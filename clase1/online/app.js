// Ejercicio 1
let ul = document.createElement("ul")
let fragmento = document.createDocumentFragment()
for (var i = 0; i < 10; i++) {
    let li = document.createElement("li")
    li.innerText = "item "+(i+1);
    fragmento.appendChild(li)
}
ul.appendChild(fragmento)
var Newul=document.querySelector('#ul').appendChild(ul)

// ------------------------------------------------------------------------
// Ejercicio 2
  if(window.outerWidth>500){
    document.querySelector('#movil').style.display='none';
  }
// Ejercicio 3

let fragmento2=document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
  let li2 = document.createElement('li');
  li2.innerText="item"+ (i+11);
  fragmento2.appendChild(li2)
}
document.querySelector('ul').appendChild(fragmento2);  

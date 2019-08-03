/*
Este script no es parte del ejercicio, aunque puede venir bien para los que quieran ver un poco de generación
de elementos en tiempo de ejecución :D

sergio.minutoli@educacionit.com
*/

var pre = document.createElement('pre');
var block = document.createElement('code');
pre.appendChild(block);
document.querySelector('aside').appendChild(pre);

block.classList.add('hljs');
block.innerHTML = document.querySelector('#scriptSolucion').textContent;
hljs.highlightBlock(block);
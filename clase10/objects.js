function saludar(){
    document.querySelector('h5').innerHTML = "Hola a todos y todas";
}

let body = document.querySelector('body');

function agregarP(data){
    let p = document.createElement('p');
    p.innerHTML = data;
    let body = document.querySelector('body');
    body.appendChild(p);
}

function crearTitulo(tituloTexto){
    let titulo = document.createElement('h1');
    titulo.innerHTML = tituloTexto;
    body.appendChild(titulo);
}

/*
class Persona {
    private String nombre;
    private String apellido;
    public Persona(String n,String a){
        this.nombre = n;
        this.apellido = a;
    }
}
*/

function Persona(n,a){
    this.nombre = n;
    this.apellido = a;
}

// $p = new Persona();
let personaUno = new Persona('Maria','Rodriguez');
let personaDos = personaUno;
let titulo = document.createElement('h1');
titulo.innerHTML = 'Objeto Persona';
body.appendChild(titulo);
agregarP("Tipo de dato Persona: " + typeof personaUno);
agregarP("Nombre de la persona: " + personaUno.nombre);
agregarP("Tipo de dato Persona: " + typeof personaDos);
agregarP("Nombre de la persona: " + personaDos.nombre);
personaDos.nombre = 'Pepe';
agregarP(personaUno.nombre);
agregarP(personaDos.nombre);

let personaTres = new Persona();
personaTres = personaDos;

personaTres.nombre = 'Andrea';
agregarP(personaTres.nombre);


/*document.querySelector('#boton').addEventListener('click',verficarForm);

function verficarForm(event){
    event.preventDefault();
}*/

crearTitulo('Funciones Variadicas');
/*
En JS no se puede sobrecargar un método.
function saludar(nombre){
    console.log("Hola soy " + nombre);
}
function saludar(nombre,edad){
    console.log("Tengo x años");
}

interface -> contrato
class Persona extends Humano
Persona p = new Persona();
Humano p1 = new Persona();
*/

function v1(){
    agregarP("Primer argumento: " + arguments[0]);
    agregarP("Segundo argumento: " + arguments[1]);
    agregarP("Tercer argumento: " + arguments[2]);
    agregarP("Cuarto argumento: " + arguments[3]);
}

v1(1,2,3);

function datos(){
    if(typeof arguments[1] !== 'undefined'){
        if(isNaN(arguments[1])){
            agregarP('Me pasate como parámetro un string'); 
        }else {
            agregarP('Me pasate como parámetro la edad');
        }
    }else{
        agregarP('No me pasaste nada');
    }
}

datos('Pedro');
datos('Pedro','sdfasdf');
datos('Pedro',83);
// function saludar($nombre,$edad = null)

function otroDato(...params){
    agregarP(params);
    console.info(params);
}
otroDato('Pedro');
otroDato('Pedro','sdfasdf');
otroDato('Pedro',83);

crearTitulo('Object Create');
let objetoNuevo = Object.create(null);
objetoNuevo.campo = 'Soy un campo';

agregarP(objetoNuevo.campo);

/*
Object create descriptors
1 - configurable: V => puede ser alterada las propiedades
2 - enumerable: V => se puede ver las propiedades del objeto
3 - value: Valor asociado a la propiedad
4 - writable: V => que lo puedo modificar
*/

let objetoOtro = Object.create(null);
Object.defineProperty(objetoOtro,'prop',{
    value: 'Hola que tal',
    writable: true,
    enumerable: true,
    configurable: true
}); 
console.log(objetoOtro);
objetoOtro.prop = 'Bien y vos?';
console.log(objetoOtro.prop);

/*Object.defineProperty(objetoOtro,'otro',{
    get(){return valor},
    set(){valor = 12356},
    enumerable: true,
    configurable: true
});*/
Object.defineProperty(objetoOtro,'otro',{
    get(){return 'holis'},
    enumerable: true,
    configurable: true
});

objetoOtro.otro = 123;
console.log(objetoOtro);

/* 
    private string j;
    public void setJ(string loquesea){
        this.j = loquesea
    }
    public string setJ(){
        return this.j;
    }
 */
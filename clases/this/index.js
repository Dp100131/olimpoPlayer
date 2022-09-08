// this en el global scope
console.log(this)

// this en el scope de una función
function whoIsThis() {

    return this;
    
}
console.log(`this en una función: ${whoIsThis()}`);

// this en el scope de una función en strict mode:

function whoIsThisStrict() {

    "use strict"; 
    return this;
    
}
console.log(`this en una función en strict mode: ${whoIsThisStrict()}`);

// this en el contexte de un objeto

const person = {

    name: 'Daniel',
    saludar: function() {

        console.log(`Hola soy ${this.name}.`)

    }

}

person.saludar();

//Cuando sacamos a una función de un objecto:

const accion = person.saludar;

accion();

// this en el contexto de una clase

function Person(name) {

    this.name = name;
    
}

Person.prototype.saludar = function() {

    console.log(`Me llamo ${this.name}`);

}

const angela = new Person('Angela');
angela.saludar();

console.log("Call, apply and bind");

// Call
function sayHi(){

    console.log(`Hola. Soy ${this.name} ${this.lastName}.`);

}

const daniel = {

    name: "Daniel",
    lastName: "Pinto Ortega"

}

sayHi.call(daniel);

function caminar(metros, direccion) {

    console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`);
    
}

caminar.call(daniel, 400, 'Norte');

//apply

caminar.apply(daniel, [800, 'Noreste']);

//bind

const juan = {

    name: 'Juan',
    lastName: 'Pinto'

}

const juanSaluda = sayHi.bind(juan);

juanSaluda();

const juanCamina = caminar.bind(juan);

juanCamina(400, 'este');

const juanCaminaOD = caminar.bind(juan, 2000, 'norte');

juanCaminaOD();

const juanCaminaOODD = caminar.bind(juan, 3000);

juanCaminaOODD('sur');





































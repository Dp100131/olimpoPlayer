console.log("Hello typescript");


let muted: boolean = true;

muted = false;

//Números
let age = 6;
let numerador: number = 42;
let denomidador: number = age;
let resultado = numerador/denomidador;

//String
let nombre: string = "Daniel";
let saludo = "Hola, me llamo " + nombre;

//Arreglos:

let people: string[] = [];

people = ["Isabel", "Nicole", "Raul"];

people.push("90000000");

let peopleAndNumbers: Array< string | number> = [];

peopleAndNumbers.push("Daniel");
peopleAndNumbers.push(300000000);

// enum

enum Color {

    Amarillo = "Rojo",
    Azul = "Azul",
    Rojo = "Rojo"

}

let colorFavorito: Color = Color.Amarillo;

// Any
let comodi: any = "Joker";
comodi = {type: "Wildcard"};

//Object
let someObject: Object = {type: "Wildcard"}

//Funciones

function add(a:number, b: number): number {

    return a + b;
    
}

const sum = add(1, 3);

function createAdder(a:number): (number) => number {

    return function (b: number){

        return b + a;

    }
    
}

const addFour = createAdder(4);

const fourPlusSix = addFour(6);

function fullName(firstName:string, lastName?: string): string {
    
    return `${firstName} ${lastName}`

}

const Daniel = fullName(nombre);
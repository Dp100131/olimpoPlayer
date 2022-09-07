/* let color = "green";

function printColor() {

    console.log(color);
    
}

printColor(); */


//IIFE: Inmediatli invoque function expression
(function() {

    let color = "green";

    function printColor() {

        console.log(color);
        
    }
    printColor();
})();

//Funciones que regresan funciones

function makeColorPrinter(color) {

    let colorMessage = `The color is ${color}.`;

    return function(){

        console.log(colorMessage);

    }
    
}

let greenColorPrinter = makeColorPrinter("green");

console.log(greenColorPrinter());


//Variables privadas

function makeCounter(n) {

    let count = n;

    return {

        increase: function(){

            count++;

        },
        decrease: function(){

            count--;

        },
        getCount: function(){
            return count;
        }

    }
    
}

let counter = makeCounter(7);

console.log("The count is: ", counter.getCount());
counter.increase();
console.log("The count is: ", counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log("The count is: ", counter.getCount());



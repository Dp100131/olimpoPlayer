console.log("Estoy en scope")

var message = "Hello Olimpo"; //Global

/* function printNumbers() {

    for (let index = 0; index < 10; index++) {
        
        setTimeout(() => {

            console.log(index);

        }, 100)
        

    }
    
} */ // Imprime 10 veces 10

function printNumbers() {

    for (let index = 0; index < 10; index++) {
        
        setTimeout(() => {

            console.log(index);

        }, 100)
        

    }
    
}

printNumbers();
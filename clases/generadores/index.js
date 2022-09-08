function* fibonacci() {

    let a = 1;

    let b = 2;

    while (true) {
        
        const nextNumber = a + b;

        a = b;

        b = nextNumber;

        yield nextNumber;


    }

}
//no es comun, ni muy usuado
(()=>{

    interface addTwoNumbers {
        (a: number, b: number): number; //voy a recibir dos numeros y devolver un numero
    }

    let addNumbers: addTwoNumbers;

    addNumbers = (x: number, y: number): number => {
        return 10;
    }


    console.log(addNumbers(10, 20));







})()
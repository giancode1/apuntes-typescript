//descomenta cada parte en orden y mira el resultado
(()=>{

    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hola ${name}`;
    const saveTheWorld = () => 'El Mundo fue salvado';

    //PARTE 1
    //Todo esto corre sin problemas
    // let myFunction;

    // myFunction = 10;
    // console.log(myFunction);

    // myFunction = addNumbers;
    // console.log(myFunction(1,2));

    // myFunction = greet;
    // console.log(myFunction('Giancarlo'));

    // myFunction = saveTheWorld;
    // console.log(myFunction());

    //PARTE 2

    // let myFunction:Function;

    // //myFunction = 10; //error
    // //console.log(myFunction);  //error

    // myFunction = addNumbers;
    // console.log(myFunction(1,2));

    // myFunction = greet;
    // console.log(myFunction('Giancarlo'));

    // myFunction = saveTheWorld;
    // console.log(myFunction());

    //PARTE 3 , funcion que retorna un numero

    let myFunction: (x:number, y:number) => number; //la salida es un numero	
    myFunction = addNumbers;
    console.log(myFunction(1,2));

    // myFunction = greet; //error
    // console.log(myFunction('Giancarlo')); //error

    // myFunction = saveTheWorld; //error
    // console.log(myFunction());  //error


    //PARTE 4 , funcion que retorna un string

    // let myFunction: (a:string) => string; 
    // myFunction = addNumbers; //error
    // console.log(myFunction(1,2)); //error

    // myFunction = greet; 
    // console.log(myFunction('Giancarlo')); 

    // myFunction = saveTheWorld; //error
    // console.log(myFunction());  //error


    // //PARTE 5 
    // let myFunction: () => void;
    // myFunction = saveTheWorld; 
    // console.log(myFunction());  

})()
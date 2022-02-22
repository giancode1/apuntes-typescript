(()=>{

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //number[]: arreglo de numeros
    const numbers1 = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10]; //number[] | string: arreglo de numeros o strings
    //si puedo especificar el tipo:
    const numbers2: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10]; //si acepta porque explicitamente lo defini
    
    //numbers.push(true);  //se queja typescript porque no es un number
    
    //ASI deberia usarse:
    const arrayNumbers: number[] = [1, 2, 3, 4, 5, 7, 8, 9, 10]; 

    const personas: string[] = ['Don Ramon', 'Goku', 'Naruto', 'Snop Dog'];

    personas.forEach( p => console.log(p.toUpperCase()));
    

})()
//funcion anonima autoinvocada, con el objetivo de que no choque nuestro codigo en el caso que declaremos variables con el mismo nombre
(() => {

    const batman: string = 'Batman';
    const flash: string = "Flash's"; //con comillas dobles se puede hacer una cadena de texto con comillas simples
    const abc:number = 123;

    console.log( batman.toUpperCase() );
    console.log(`I'm ${batman}, ${abc.toString()}`);

    //console.log( batman[10].toUpperCase() ); //error porque no existe el indice 10
    console.log( batman[10]?.toUpperCase() ); //? null check
    //si existe el indice 10, entonces se ejecuta el codigo, si no, no se ejecuta
    //como respuesta da undefined y ya no error
    
    console.log( batman[10]?.toUpperCase() || 'No esta' ); 






})()
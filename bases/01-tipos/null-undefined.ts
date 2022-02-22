(()=>{
    //null no es lo mismo que undefined, es un valor que no existe

    let nada: undefined = undefined;

    console.log(nada); //undefined

    // let nada1:number = undefined; //error
    // let nada2:number = null; //error


    // let isActive:boolean = null; //error
    let isActive2:(boolean | undefined) = undefined; //esta seria una salida
    //pero en el tsconfig cambias a: 
    //"strictNullChecks": false  //y ya no da error, pero mejor dejalo en true



})()
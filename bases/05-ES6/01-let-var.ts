(()=>{
    console.log("GC");

    const nombre: string = "Giancarlo";

    const getName = ():void => {
        console.log(`This is your name: ${nombre} `);
    }
    //trabaja siempre para el es6, con navegadores en ordenadores viejos el es5 
})()
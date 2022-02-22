(()=>{
    //never no es undefined, no es void
    //cuando mires una funcion con never,
    //significa que es una funcion que va a terminar con un error

    const abc = (msg: string):(never | number) => {
        if(false){
            throw new Error(msg);
        }
        return 1
    }
    //esta funcion devuelve un never, por lo que nunca termina
    abc('auxilio');

    console.log("Hola mundo"); //no se va a ejecutar


    //
    const abcd = (msg: string):(never | number) => { //siempre regresa un numero o un never
        throw new Error(msg);
    }

})()
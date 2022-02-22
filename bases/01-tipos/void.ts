//void, significa vacio, no tiene nada, no tiene valor
(()=>{ //funcion anonima autoinvocada

    function callhero(){ //asi, seria una funcion que regresa void

    }

    const a = callhero(); //a es de tipo void, no tiene valor
    console.log(a); //undefined, no es lo mismo que null

    function callhero1():void { //esta linea es lo mismo que la de arriba
        //return 1; //no me deja porq es un void la funcion
        return; //regresaria undefined
    }

    //ahora como lo hariamos con una funcion flecha

    const callhero2 = ():void => { 
        
    } 

})()
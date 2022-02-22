//tratar de usar any lo menos posible
//usa siempre un tipado estricto
(() => {

    let myNum = 123; //si le dejo asi es de tipo number
    let power; //si le dejo asi es de tipo any 
    let avenger: any = 123 ;
    
    //const algo; //error, una constante se debe inicializar

    avenger = 'Capitan America';
    console.log(avenger.charAt(0));  //ya no asoma la ayuda porque es de tipo any
    console.log((avenger as string).charAt(0)); //casting, avenger es tratado como string, ya asoma la ayuda

    avenger = 145.7526;
    console.log(avenger.toFixed(2)); 

    console.log(<number>avenger.toFixed(1)); //otro tipo de casteo

})()
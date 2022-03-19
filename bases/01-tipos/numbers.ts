(()=>{

    let avengers;
    console.log(avengers); 

    let villans: number = 10;

    // if(avengers<villans){ //typescript detecta problema porque avengers es undefined
    //     console.log("Nos jodimos");
    // }else{
    //     console.log("Estamos bien");
    // }

    avengers = Number('55A');
    console.log({avengers}); //NaN es considerado un numero

    //mas numeros
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

})()
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

})()
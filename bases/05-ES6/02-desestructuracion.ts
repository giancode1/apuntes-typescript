(()=>{

    type Avengers = {
        ironman: string;
        hulk: string;
        spiderman: string;
        activo: boolean;
        poder: number;
    }

    const avengers:Avengers = {
        ironman: 'Tony Stark',
        hulk: 'Bruce Banner',
        spiderman: 'Peter Parker',
        activo: true,
        poder: 1500
    }

    const { ironman, hulk, spiderman, activo, poder } = avengers;
    console.log(ironman.toUpperCase(), poder, activo);


    const printAvenger = ({spiderman, ...resto}:Avengers) => {
        console.log(spiderman, resto);
    }
    printAvenger(avengers);

    //DE ARRAY
    const avengersArr:string[] = ['Thor', 'Cap America', 'Vision'];

    const [Elthor,,vision] = avengersArr; //puedes cambiar el nombre
    console.log(Elthor, vision);

})()
(()=>{

    class Avenger {
        static avgAge: number = 35; //se puede poner abajo sin static y modificaria el avgAge de la clase, y no solo de ese objeto

        constructor(private name: string, private team: string, public realName?: string){

        }
    }

    const brujaEscarlata:Avenger = new Avenger('brujaEscarlata','Cap.America', "Wanda Maximoff");
    // console.log(brujaEscarlata.team); //no se puede acceder a una propiedad privada


    console.log(brujaEscarlata);








})()
(()=>{
//usualemente se trabaja mas con propiedades publicas, privadas y estaticas, tambien se puede usar el modificador readonly, que es como una propiedad privada pero que no se puede modificar
    class Avenger {
        static avgAge: number = 35; //se puede poner abajo sin static y modificaria el avgAge de la clase, y no solo de ese objeto
        static getAvgAge(){
            return this.name;  //Avenger
            //return this.team; //no existe en js ese atributo
        }
        constructor(private name: string, private team: string, public realName?: string){

        }

        whatTeam(){ //metodo publico por defecto
            return `${this.name} is a member of the ${this.team} team`;
        }
    }

    const brujaEscarlata:Avenger = new Avenger('brujaEscarlata','Cap.America', "Wanda Maximoff");
    // console.log(brujaEscarlata.team); //no se puede acceder a una propiedad privada


    // console.log(brujaEscarlata);
    console.log("whatTeam:", brujaEscarlata.whatTeam());
    console.log(Avenger.getAvgAge()); //Avenger, nombre de la clase
    //los métodos y propiedades estáticas solo pueden ser accedidos desde la clase y no mediante instancias de la misma







})()
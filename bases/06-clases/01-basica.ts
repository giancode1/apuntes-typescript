(()=>{

    class Avenger {
        private name: string; //tengo acceso a esta propiedad solo desde la clase
        public team: string; //por defecto es public pero es buena practica ponerlo
        public realName?: string; 
        static avgAge: number = 35; //es una propiedad estatica

        constructor(name: string, team: string, realName?: string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const blackPanter:Avenger = new Avenger('blackPanter','IronMan', "T'Challa");
    console.log("team:",blackPanter.team);
    //console.log("name:",blackPanter.name); //no se puede acceder a una propiedad privada
    console.log(Avenger.avgAge); //para acceder a una propiedad estatica se usa la clase y el nombre de la propiedad

    console.log(blackPanter);


})()
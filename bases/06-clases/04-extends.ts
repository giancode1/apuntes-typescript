(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName?: string
        ) {
            console.log("Constructor Avenger llamado");
        }
        private getFullName(): string { //private solo se puede acceder desde la clase
            return `${this.name} ${this.realName}`;
        }
        protected getFullName1(): string { //protected solo se puede acceder desde la clase o desde clases que hereden de esta
            return `${this.name} ${this.realName}`;
        }
        public getName(): string {
            return `${this.name}`;
        }
    }

    // class Xmen extends Avenger{ //si dejara asi se llama el constructor de Avenger
    // }
    class Xmen extends Avenger {
        constructor(name: string, public isMutant: boolean = true, realName?: string,) {
            super(name, realName); //debe ponerse el super primero, llama al constructor de Avenger
            console.log("Constructor Xmen llamado");
            //super.getFullName  //no se puede acceder a una propiedad privada
        }
        getFullNameDesdeXmen() {
            return super.getFullName1();
        }
    }

    const wolverine = new Xmen('wolverine', true, "Logan");
    console.log("getFullNameDesdeXmen:", wolverine.getFullNameDesdeXmen());


})()
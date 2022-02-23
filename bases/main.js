"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const blackPanter = new Avenger('blackPanter', 'IronMan', "T'Challa");
    console.log("team:", blackPanter.team);
    console.log(Avenger.avgAge);
    console.log(blackPanter);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const brujaEscarlata = new Avenger('brujaEscarlata', 'Cap.America', "Wanda Maximoff");
    console.log(brujaEscarlata);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        whatTeam() {
            return `${this.name} is a member of the ${this.team} team`;
        }
    }
    Avenger.avgAge = 35;
    const brujaEscarlata = new Avenger('brujaEscarlata', 'Cap.America', "Wanda Maximoff");
    console.log("whatTeam:", brujaEscarlata.whatTeam());
    console.log(Avenger.getAvgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        getFullName1() {
            return `${this.name} ${this.realName}`;
        }
        getName() {
            return `${this.name}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, isMutant = true, realName) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado");
        }
        getFullNameDesdeXmen() {
            return super.getFullName1();
        }
    }
    const wolverine = new Xmen('wolverine', true, "Logan");
    console.log("getFullNameDesdeXmen:", wolverine.getFullNameDesdeXmen());
})();
(() => {
    class Xmen {
        constructor(name, isMutant = true, realName) {
            this.name = name;
            this.isMutant = isMutant;
            this.realName = realName;
        }
        get fullName() {
            return `${this.name}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 letras');
            }
            this.name = name;
        }
    }
    const wolverine = new Xmen('wolverine', true, "Logan");
    wolverine.fullName = "Gian wolverine";
    console.log(wolverine.fullName);
})();
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', "Logan");
    const magneto = new Villian('Magneto', "Erik Lehnsherr");
    console.log(wolverine.getFullName());
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    const printName = (persona) => {
        console.log(persona.name);
    };
    printName(wolverine);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis("Soy apocalipsis el único");
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName("Xavier");
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map
"use strict";
(() => {
    ;
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let spiderman = {
        name: "Peter Parker",
        age: 17,
        powers: ["Super fuerza", "Super velocidad", "Super agilidad"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    const client = {
        name: "Pedro",
        age: 24,
        address: {
            id: 123,
            street: "Calle 123",
            city: "Ciudad 000",
        },
        getFullAddress() {
            return this.address.city;
        }
    };
    const client2 = {
        name: "Maria",
        age: 21,
        address: {
            id: 123,
            street: "Calle 123",
            city: "Ciudad 000",
        },
        getFullAddress() {
            return this.address.city;
        }
    };
})();
var volvo = {
    llantas: 4,
    modelo: "sedan",
    seguro: true
};
(() => {
    class Mutant {
        constructor(name, age, realName) {
            this.name = name;
            this.age = age;
            this.realName = realName;
        }
        power(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    let addNumbers;
    addNumbers = (x, y) => {
        return 10;
    };
    console.log(addNumbers(10, 20));
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}
//# sourceMappingURL=main.js.map
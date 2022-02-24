//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
//La unica diferencia entre interfaces y tipos
//esque las interfaces son extendibles los tipos no
(()=>{
    //Las interfaces solo existen en TypeScript
    //pueden tener propiedades opcionales
    interface Hero {
        name: string;
        age?: number; // ? indica que es opcional
        powers: string[];
        direccion?:{
            //otras propiedades
        }
        getName?: () => string;
        getAge?: () => number;
    };

    let flash: Hero = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };

    let spiderman: Hero = {
        name: "Peter Parker",
        age: 17,
        powers: ["Super fuerza", "Super velocidad", "Super agilidad"],
        getName() {
            return this.name;
        },
    };










})()
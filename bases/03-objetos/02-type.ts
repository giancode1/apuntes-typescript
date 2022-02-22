(() => {
    type Hero = {
        name: string;
        age?: number; // ? indica que es opcional
        powers: string[];
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
})();

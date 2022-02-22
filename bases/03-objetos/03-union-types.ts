(() => {
    type Hero = {
        name: string;
        age?: number; // ? indica que es opcional
        powers: string[];
        getName?: () => string;
        getAge?: () => number;
    };

    let myCustomVariable:(string | number | Hero) = 'Giancarlo';
    console.log(typeof myCustomVariable); // string

    myCustomVariable = 123;
    console.log(typeof myCustomVariable); // number

    myCustomVariable = {
        name: 'Goku',
        age: 24,
        powers: ['Kamehameha', 'Super velocidad'],
    }
    console.log(typeof myCustomVariable); // object, no es tipo Hero amenos que sea una clase

})();

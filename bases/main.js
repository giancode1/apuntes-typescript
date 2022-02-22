"use strict";
var msg = "Hola mundo";
var m = "Hola mundo";
var msg1 = "Hola mundo";
var hero = {
    name: "Ironman",
    age: 40,
};
hero.age += 1;
console.log(hero.age);
var b = 1;
var c;
function sayHello(name) {
    console.log("Hello " + name);
    console.log(name.charAt(0));
}
(function () {
    var a = 1;
    console.log(a);
})();
(function () {
    var myNum = 123;
    var power;
    var avenger = 123;
    avenger = 'Capitan America';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 145.7526;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(1));
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var numbers1 = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    var numbers2 = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    var arrayNumbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
    var personas = ['Don Ramon', 'Goku', 'Naruto', 'Snop Dog'];
    personas.forEach(function (p) { return console.log(p.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log(isSuperman);
    console.log({ isBatman: isBatman });
})();
(function () {
    var audio = 1;
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudioLevel = AudioLevel.medium;
    console.log(currentAudioLevel);
})();
(function () {
    var abc = function (msg) {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    abc('auxilio');
    console.log("Hola mundo");
    var abcd = function (msg) {
        throw new Error(msg);
    };
})();
(function () {
    var nada = undefined;
    console.log(nada);
    var isActive2 = undefined;
})();
(function () {
    var avengers;
    console.log(avengers);
    var villans = 10;
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a, _b;
    var batman = 'Batman';
    var flash = "Flash's";
    var abc = 123;
    console.log(batman.toUpperCase());
    console.log("I'm ".concat(batman, ", ").concat(abc.toString()));
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    console.log(((_b = batman[10]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || 'No esta');
})();
(function () {
    var hero = ['Spiderman', 100];
    hero[1] = 120;
    var herom = ['Spiderman', 100, true];
    herom[2] = false;
})();
(function () {
    function callhero() {
    }
    var a = callhero();
    console.log(a);
    function callhero1() {
        return;
    }
    var callhero2 = function () {
    };
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
        fuerza[fuerza["batman"] = 1] = "batman";
    })(fuerza || (fuerza = {}));
    var fuerzaFlash = fuerza.flash;
    var fuerzaSuperman = fuerza.superman;
    var fuerzaBatman = fuerza.batman;
    var fuerzaAcuaman = fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var hero = 'Hulk';
    function returnName(name) {
        return hero;
    }
    console.log(typeof returnName);
    var heroName = returnName('Batman');
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var a = fullName("Giancarlo", "Culcay");
    console.log(a);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '');
    };
    var a = fullName("Giancarlo");
    console.log(a);
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '');
        }
    };
    var a = fullName("Giancarlo", 'Culcay', true);
    console.log(a);
})();
(function () {
    var fullName = function (firstName) {
        var restoDeNombres = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restoDeNombres[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restoDeNombres.join(' '), " ");
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return 'El Mundo fue salvado'; };
    var myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    var spiderman = {
        name: "Peter Parker",
        age: 17,
        powers: ["Super fuerza", "Super velocidad", "Super agilidad"],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var myCustomVariable = 'Giancarlo';
    console.log(typeof myCustomVariable);
    myCustomVariable = 123;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Goku',
        age: 24,
        powers: ['Kamehameha', 'Super velocidad'],
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        },
    };
    var villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    var charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
//# sourceMappingURL=main.js.map
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    console.log("GC");
    const nombre = "Giancarlo";
    const getName = () => {
        console.log(`This is your name: ${nombre} `);
    };
})();
(() => {
    const avengers = {
        ironman: 'Tony Stark',
        hulk: 'Bruce Banner',
        spiderman: 'Peter Parker',
        activo: true,
        poder: 1500
    };
    const { ironman, hulk, spiderman, activo, poder } = avengers;
    console.log(ironman.toUpperCase(), poder, activo);
    const printAvenger = (_a) => {
        var { spiderman } = _a, resto = __rest(_a, ["spiderman"]);
        console.log(spiderman, resto);
    };
    printAvenger(avengers);
    const avengersArr = ['Thor', 'Cap America', 'Vision'];
    const [Elthor, , vision] = avengersArr;
    console.log(Elthor, vision);
})();
(() => {
    const ironman = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    };
    const captainAmerica = {
        name: 'Steve Rogers',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor Odinson',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
//# sourceMappingURL=main.js.map
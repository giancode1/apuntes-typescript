const msg = "Hola mundo";
const m: string = "Hola mundo";

let msg1: string = "Hola mundo";
//msg1 = 123;  //mira que no se puede asignar un numero a una variable de tipo string

const hero = {
  name: "Ironman",
  age: 40,
};
hero.age += 1;
console.log(hero.age);

let b: number = 1;
let c; //c es de tipo any, puede ser cualquier cosa
//ganamos flexibilidad pero perdemos control

function sayHello(name: string) {
  // por defecto "noImplicitAny": true,
  console.log("Hello " + name);
  console.log(name.charAt(0));
}

(() => {
  const a: number = 1;
  console.log(a);
})();

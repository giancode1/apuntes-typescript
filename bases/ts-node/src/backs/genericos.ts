//npm start
import { printObject, genericFunction, genericFunctionArrow } from '../09-generics/01-generics';
import { Hero , Villain } from '../interfaces/';

//Funciones Genericas, puede recibir cualquier tipo de argumento
printObject(123);
printObject(new Date());
printObject({a:1,b:2});
printObject([1,2,3,'4']);
printObject('Hola');

//el tipo que entra es el mismo que sale
// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction('Gian').charAt(0));
// console.log(genericFunction(new Date()).getDate());

//el tipo que entra es el mismo que sale
console.log(genericFunctionArrow(3.1416).toFixed(2));
console.log(genericFunctionArrow('Gian').charAt(0));
console.log(genericFunctionArrow(new Date()).getDate());


//Ejemplo de función genérica en acción
//deadpool puede ser tanto villano como heroe
const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 150
}

console.log(genericFunctionArrow<Hero>(deadpool).realName);
//console.log(genericFunctionArrow<Hero>(deadpool).dangerLevel); //error
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);


// * 09 Generics :
import { getPokemon } from './09-generics/getPokemon';
import { Pokemon } from './10-decorators/pokemon-class';

getPokemon(80)
    .then(resp => console.log(resp.name, resp.sprites.front_default))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizado'));



// * 10 Decoradores :

const charmander = new Pokemon('Charmander');
console.log(charmander);
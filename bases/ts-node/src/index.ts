import { getPokemon } from './09-generics/getPokemon';

getPokemon(80)
    .then(resp => console.log(resp.name, resp.sprites.front_default))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizado'));

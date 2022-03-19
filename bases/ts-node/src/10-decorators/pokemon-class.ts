function printToConsole(constructor: Function) {
    console.log(constructor);
}

@printToConsole //decorador
export class Pokemon {
    public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/';
    constructor(
        public name: string,

    ){}
}
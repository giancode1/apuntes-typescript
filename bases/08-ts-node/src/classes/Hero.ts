import powers from '../data/powers';

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) {}
    get power():string{
        // return powers.find(p => p.id === this.powerId)!.desc || 'not found';  //! si esta ahi
        return powers.find(p => p.id === this.powerId)?.desc || 'not found';
    }
}

export class Hero1 {}
export class Hero2 {}
export class Hero3 {}

export const PI = 3.14;
export const name = 'Giancarlo';





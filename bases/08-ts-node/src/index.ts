import { Hero as SuperHeroe, Hero2} from './classes/Hero';
import powers, { Power } from './data/powers';

const Hero = 123;

const ironman = new SuperHeroe("Ironman", 1, 45);
console.log(ironman);


// import * as HeroClass from './classes/Hero';
// const hulk = new HeroClass.Hero("Hulk", 2, 45);

console.log(powers);
console.log(ironman.power);

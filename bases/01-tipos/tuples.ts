//tuplas, propio de typescript
(() => {

    const hero: [string, number] = ['Spiderman', 100]; 
    
    //hero[0] = 90; //no me deja
    //hero[1] = 'asd'; //no me deja
    
    hero[1] = 120; 
    
    const herom: [string,number,boolean] = ['Spiderman', 100, true]; 
    herom[2] = false;


})()
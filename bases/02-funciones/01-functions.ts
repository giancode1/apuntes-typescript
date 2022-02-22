(()=>{

const hero:string = 'Hulk';
function returnName(name:string):string{ 
    return hero;
}

console.log(typeof returnName);

const heroName = returnName('Batman');

})()
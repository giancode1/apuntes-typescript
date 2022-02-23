(() => {
//clases abstractas sirven para crear otras clases, 
//NO SIRVE PARA CREAR INSTANCIAS
//o para asegurarse de que un argumento puede ser de cualquier otro tipo pero siempre y cuando implemente las caracteristicas de su clase abstracta
    
    abstract class Mutante  {
        constructor(public name: string, public realName?: string,) {
        }
        getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }
    // let wolverine: Mutante ;
    // wolverine = new Mutante('Wolverine', "Logan");

    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado';
        }
    }

    const wolverine = new Xmen('Wolverine', "Logan");
    const magneto = new Villian('Magneto', "Erik Lehnsherr");
    
    console.log(wolverine.getFullName());
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    
    const printName = (persona: Mutante) => {
        console.log(persona.name);
    }
    
    printName(wolverine);
//Imagínate una fábrica de carrocerías de autos... ahí crean miles de carrocerías, pero no hacen autos... hay otra fábrica, que toma las carrocerías ( clases abstractas ) y les pone llantas, motor, pintura y luego ya pueden usarlo como vehículo... 
})()
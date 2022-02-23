(() => {

    class Xmen  {
        constructor(public name: string, public isMutant: boolean = true, public realName?: string,) {
        }

        get fullName() { //no recibe parametro, siempre debe retornar algo
            return `${this.name}`;	//la respuesta tiene que ser sincrona
        }
        set fullName(name:string){ //metodo que recibe un solo parametro y no retorna nada
            if(name.length < 3){
                throw new Error('El nombre debe ser mayor de 3 letras');
            }
            this.name = name;
        }
    }

    const wolverine = new Xmen('wolverine', true, "Logan");
    wolverine.fullName = "Gian wolverine";
    console.log(wolverine.fullName); //los getters no se ejecutan

})()
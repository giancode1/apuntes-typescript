(()=>{

    interface Xmen {
        name: string;
        realName: string;
        power(id:number):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human{
        // public name: string;
        // public realName: string;
        // public age: number;

        constructor(
            public name: string,
            public age: number,
            public realName: string
            ){}

        power(id: number) {
            return this.name + ' ' + this.realName;
        }
    }



})()
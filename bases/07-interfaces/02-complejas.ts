(() => {
    //Las interfaces no crean instancias, no se pueden crear objetos
    
    interface Client {
        //La Interfaz Principal va arriba
        name: string;
        age?: number;
        // address?: {
        //     id: number;
        //     street: string;
        //     city: string;
        // }
        address: Address;
        getFullAddress():string;
    }

    interface Address {
        //luego las interfaces internas
        id: number;
        street: string;
        city: string;
    }

    const client: Client = {
        name: "Pedro",
        age: 24,
        address: {
            id: 123,
            street: "Calle 123",
            city: "Ciudad 000",
        },
        getFullAddress(){
            return this.address.city;
        }
    };

    const client2: Client = {
        name: "Maria",
        age: 21,
        address: {
            id: 123,
            street: "Calle 123",
            city: "Ciudad 000",
        },
        getFullAddress(){
            return this.address.city;
        }
    };
})();

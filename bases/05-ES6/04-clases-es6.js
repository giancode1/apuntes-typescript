(() => {
    class Avenger {
        //No es necesario:
        // name; // Esto es una propiedad
        // power;
        constructor(name = "No name", power = 0) {
            this.name = name;
            this.power2 = power; //me equivoque y puse power2, pero no me da error
        }
    }

    class FlyingAvenger extends Avenger {
        // flying;
        constructor(name, power) {
            super(name, power);
            this.flying = true;

            this.otraPropiedad = "otra propiedad";//js permite
            //pero estas propiedades aparecen de la nada
        }
    }

    const hulk = new Avenger("Hulk", 10000);
    const falcon = new FlyingAvenger("falcon", 50, 'loquesea', true, 124); //no hay restricciones en js que me impida ponerle un valor a un parametro que no se usa

    console.log( hulk );
    console.log( falcon );
})();

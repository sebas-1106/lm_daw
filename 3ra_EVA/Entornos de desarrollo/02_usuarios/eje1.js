class Animal{
    constructor(nombre){
        this.nombre = nombre;
        this.animales = [];
    }
    agregarAnimal(animal){
        this.animales.push(animal);
        console.log(this.animales);
    }

    hablar(){
        for (const animal of this.animales) {
            console.log(`El animal hace ${this.animales[animal]}`);
        }
    }
}

class perro{
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza= raza;
    }

}

class gato{

    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza= raza;
    }

}
const p1= new perro("fifi", "pincher");
const g1 = new gato("gato", "persa");
const a1 = new Animal("perros");
a1.agregarAnimal(p1);
a1.agregarAnimal(g1);
a1.hablar();
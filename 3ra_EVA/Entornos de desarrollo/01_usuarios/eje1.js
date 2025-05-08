class Persona{
    constructor(nombre, pais, edad){
        this.nombre= nombre;
        this.pais= pais;
        this.edad= edad;

    }

    mostrarDetalles(){
        console.log("Nombre: ", this.nombre, "Pais: ", this.pais, "Edad: ", this.edad);
    }
}

class Vehiculo{

    constructor(marca, modelo, anio){
        this.marca= marca;
        this.modelo= modelo;
        this.anio= anio;
    }

    mostrarDetalles(){
        console.log("Marca: ", this.marca, "Modelo: ", this.modelo, "Año: ", this.anio);
    }
}

class Conductor extends Persona{

    constructor(nombre, pais, edad, licencia){
        super(nombre, pais, edad);
        this.licencia= licencia;
        this.vehiculos= [];
    }

    agregarVehiculos(vehiculo){
        this.vehiculos.push(vehiculo);
        console.log(this.vehiculos);
    }

    mostrarDetalles(){
        console.log(`Nombre: ${this.nombre}, Pais: ${this.pais}, Edad: ${this.edad}, Licencia: ${this.licencia}`);
    }
}

const user= new Persona("Juan", "Mexico",30);
const conductor = new Conductor("Juan", "Mexico",30, "1234");
const vehiculo = new Vehiculo("Toyota", "Camry", 2015);
const vehiculo2 = new Vehiculo( "Honda", "Civic", 2010);
conductor.mostrarDetalles();
conductor.agregarVehiculos(vehiculo);
conductor.agregarVehiculos(vehiculo2);
vehiculo.mostrarDetalles();
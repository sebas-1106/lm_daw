// const nuevoArray= arrayOriginal.map((elemento, indice, array)=> {

//     // Logica de transformacion
//     // indice y array son opcionales

//     // Logica de transformacion
//     return elementoTransformado
// });

const numeros = [1, 2, 3, 4, 5];

// duplicar los numeros en un nuevo array usando map
const duplicados = numeros.map((num) =>{
    return num * 2
});
console.log(duplicados); 

const nombres = ['Juan', 'Pedro', 'Maria', 'Luis'];

// convertir nombres a mayusculas
const nombresMayus = nombres.map((nombre) => {

    return nombre.toUpperCase();
});

console.log(nombresMayus);

const productos = [ { id: 1, nombre: 'Camisa', precio: 20}, {id: 2, nombre: 'Pantalones', precio: 30}, {id: 3 , nombre: 'Zapatillas', precio: 40} ];
// crear un nuevo array con el precio al 10% de descuento
const nombresProductos = productos.map((producto) => {
    return {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio * 0.9
    }
    });
    console.log(nombresProductos);

    const usuarios = [

        {   firtName : "Pedro",
            lastName : "Perez",
            age : 25,
            active : true
        }
,
        {   firtName : "Paco",
            lastName : "Perez",
            age : 35,
            active : false
        }
,
        {   firtName : "Sebas",
            lastName : "Acevedo",
            age : 18,
            active : true
        }
    ]

    // devolver un array nuevo que cada objeto tenga esta estructura

    // {
    //     id : firtName_lastName,
    //     fullName :  firtName_lastName,
    //     isAdult : true o false 
    //     status  : active o no active, dependiendo del campo active
    // }

const newArrayUser = usuarios.map((user, indice) => {

    return {
        id : `${indice} , ${user.firtName} ${user.lastName}`,
        fullName : user.firtName + " " + user.lastName,
        isAdult : user.age >= 18 ? true : false,
        status : user.active ? "active" : "Inactive"
    }
})
console.log(newArrayUser);
class Libro{

    constructor(ISBN, titulo, autor){
        this.ISBN= ISBN;
        this.autor=autor;
        this.titulo=titulo;
    }

    prestar(){
        console.log(`Libro con ${ISBN}, autor ${this.autor} y titulo ${this.titulo} ha sido prestado`)
    }

    devolver(){
        console.log(`Libro con ${ISBN}, autor ${this.autor} y titulo ${this.titulo} ha sido devuelto`)
    }


}
class Usuario {
    constructor(id,nombre){
        this.id= id;
        this.nombre= nombre;
    }

    solicitarLibro(libro){
        console.log(`Solicitando libro ${libro.titulo}. Usuario con id ${this.id}`)
    }

    devolverLibro(libro){
        console.log(`devolviendo libro ${libro.titulo}. Usuario con id ${this.id}scd`)
    }
}

class Bibliotecario{

    constructor(turno){
        this.turno= turno;
    }

    registrarLibro(ISBN, titulo, autor){
        console.log(`Se ha añadido el libro con ISBN ${ISBN}, autor ${autor} y titulo ${titulo}`)
    }
}

const user= new Usuario(1, 'Paco');
const book= new Libro('23', '100 años', 'GABO');
const bibliotecario = new Bibliotecario('mañana');

user.solicitarLibro(book);
user.devolverLibro(book);
book.prestar(); book.devolver();
bibliotecario.registrarLibro('23', 'maus', 'hjola');
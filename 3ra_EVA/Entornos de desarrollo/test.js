class Usuario {
    constructor(nombre, correo){
        this.nombre= nombre;
        this.correo=correo;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }

}

class Admin extends Usuario{
    constructor(nombre, email, rol){
        super(nombre, email);
        this.rol= rol;
    }

    decirRol(){
        console.log(`El rol de ${this.nombre} es ${this.rol}`)
    }
}
const user= new Usuario('Angel', 'angel@gmail.com');
user.saludar();
const admin= new Admin('Camila', 'camilo@gmail.com', 'Programador')
admin.saludar();
admin.decirRol();
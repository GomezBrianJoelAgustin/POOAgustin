//Las clases 

//Constructor crea los objetos en base a la plantilla

class Perros {
    constructor (id, nombre, lugar) {
        this.id = id;
        this.nombre = nombre;
        this.lugar = lugar;
    }

    //Esto es un metodo
    // Metodos: Los metodos son funciones que podemos llamar adentro de un objeto y que pueden interactuar con sus propiedades
    nombrar () {
        return `El perro es ${this.nombre} y vive en ${this.lugar}`
    }
}


//Extends es para crear una subclase
class Dueños extends Perros {
    constructor(id, nombre, apellido){
        super (id, nombre)
        this.apellido = apellido;
    }

    nombrarDueño(){
        return ` El dueño es ${this.nombre} ${this.apellido}`
    }
}


//Esto es antes de las sub clases
const Roma = new Perros(1, "Roma", "Casa");
const Pepe = new Perros(2, "Pepe", "Calle")

console.log(Roma)
console.log(Pepe)

console.log(Roma.nombrar())
console.log(Pepe.nombrar())


//Con la subclase Dueños

const agustin = new Dueños(3, "Agustin", "Gomez")
const brian = new Dueños(4, "Brian", "Gomez")

console.log(agustin)

console.log(agustin.nombrarDueño())
console.log(brian.nombrarDueño())




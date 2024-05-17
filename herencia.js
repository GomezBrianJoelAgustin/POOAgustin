//La herencia permite la definicion de una clase a partir de otra ya existente, compartiendo automaticamente metodos y datos entre clases.
//La palabra super es usada para acceder y llamar funciones del padre de un objeto o clase.

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    datosPersona (){
        return `Los datos de la persona son: ${this.nombre} ${this.edad}`
    }
}


const agustin = new Persona("Agustin", 21);

console.log(agustin.datosPersona())

class Alumno extends Persona{
    constructor(nombre, edad, matricula){
        super(nombre, edad)
        this.matricula = matricula;
    }

    mostrarAlumno(){
        return `Los datos del alumno son: ${this.nombre}, ${this.edad}, ${this.matricula}`
    }
}

const brian = new Alumno("Brian", 21, 1)

console.log(brian.mostrarAlumno());


class Profesor extends Persona{
    constructor(nombre, edad){
        super(nombre, edad)
       
        
    }

    set sDepartamento(valor){
        this.departamento = valor;  //Con set modificamos o agregamos un dato
    }

    get gDepartamento(){
        return this.departamento;   //Con get llamamos o recuperamos algun dato 
    }

    mostrarProfesor(){
        return `El departamento del profesor ${this.nombre} es ${this.departamento}`
    }
}

const javier = new Profesor("Javier", 29)
javier.sDepartamento = "Programacion" //Ingresamor el valor del departamento

console.log(javier.mostrarProfesor())
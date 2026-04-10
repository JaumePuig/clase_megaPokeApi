class libro {
    constructor(nombre, disponible) {
        this.nombre = nombre;
        this.disponible = disponible;

    }
}

class usuario {
    constructor(nombre, libros) {
        this.nombre = nombre;
        this.libros = libros;
    }

    tomarPrestado(book){
        if (book.disponible) {
            this.libros.push(book.nombre);
            book.disponible = false;
            console.log("Has tomado prestado el libro: " + book.nombre);
        }else{
            console.log("Este libro ya esta prestado.");
        }
    }
}

let a = new libro("El camino de los reyes", true);
let b = new usuario("Jaume", []);

b.tomarPrestado(a);
b.tomarPrestado(a);
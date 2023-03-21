/*
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() 
para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
    constructor(ISBN, titulo, autor, paginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._paginas = paginas;
    }

    get ISBN() {
      return this._ISBN;
    }
    get titulo() {
      return this._titulo;
    }
    get autor() {
      return this._autor;
    }
    get paginas() {
      return this._paginas;
    }
  
    
    set ISBN(newISBN) {
      this._ISBN = newISBN;
    }
    set titulo(newTitulo) {
      this._titulo = newTitulo;
    }
    set autor(newAutor) {
      this._autor = newAutor;
    }
    set paginas(newpaginas) {
      this._paginas = newpaginas;
    }

    mostrarLibro() {
      document.write(`El libro "${this.titulo}" con ISBN ${this.ISBN} creado por el autor "${this.autor}" tiene ${this.paginas} páginas.`);
      document.write("<br>")
    }
  }
  
  let libro1 = new Libro("1234567891", "Filosofia en 11 frases", "Darío Sztajnszrajber", 312);
  let libro2 = new Libro("1234567892", "Mein Kampf", "Adolf Hitler", 781);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  if (libro1.paginas > libro2.paginas) {
    document.write(`El libro "${libro1.titulo}" tiene más páginas que el libro "${libro2.titulo}".`);
  } else if (libro1.paginas < libro2.paginas) {
    document.write(`El libro "${libro2.titulo}" tiene más páginas que el libro "${libro1.titulo}".`);
  } else {
    document.write("Los dos libros tienen el mismo número de páginas.");
  }
  
/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
 Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:



esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */


class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.DNI = this.generaDNI();
    }

    mostrarGeneracion() {
        let generacion = '';
        let rasgo = '';

        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            generacion = 'Silent Generation (Los niños de la posguerra)';
            rasgo = 'Austeridad';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);

        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            generacion = 'Baby Boom';
            rasgo = 'Ambición';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            generacion = 'Generación X';
            rasgo = 'Obsesión por el éxito';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            generacion = 'Generación Y';
            rasgo = 'Frustración';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = 'Generación Z';
            rasgo = 'Irreverencia';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);
        } else {
            document.write("No se puede determinar la generacion de la persona, ingrese otro año de nacimiento.")
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(` <br> ${this.nombre} SI es mayor de edad.`);
        } else {
            document.write(`<br> ${this.nombre} NO es mayor de edad.`);
        }
    }

    mostrarDatos() {
        document.write(`Nombre: ${this.nombre} <br> Edad: ${this.edad} años <br> DNI: ${this.dni} <br> Sexo: ${this.sexo} <br> Peso: ${this.peso} Kg <br> Altura: ${this.altura} metros <br> Año de nacimiento: ${this.anioNacimiento} <br>`);
    }

    generaDNI() {
        let dni = "";
        for (let i = 0; i < 8; i++) {
          dni += Math.floor(Math.random() * 10);
        }
        this.dni = dni;
      }
}

let persona = new Persona ( "Joaquin Fuentes", 29, "M", 95, 1.78, 1994);

persona.generaDNI();
persona.mostrarDatos();
persona.mostrarGeneracion();
persona.esMayorDeEdad();

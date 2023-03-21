/*
Escribe una clase que permita crear distintos objetos “rectángulos”,
 con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades,
  calcular el perímetro y el área
 */

  
  class Rectangulo {
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    setAncho(ancho) {
      this.ancho = ancho;
    }
  
    setAlto(alto) {
      this.alto = alto;
    }
  
    getAncho() {
      return this.ancho;
    }
  
    getAlto() {
      return this.alto;
    }
  
    getPerimetro() {
      return 2 * (this.ancho + this.alto);
    }
  
    getArea() {
      return this.ancho * this.alto;
    }
  
    mostrarPropiedades() {
      document.write(`Ancho: ${this.ancho} / Alto: ${this.alto}`);
      document.write("<br>")
      document.write(`Perimetro: ${this.getPerimetro()} <br> Área: ${this.getArea()}`);

    }
  }

  let rectangulo = new Rectangulo ( 5, 10);

  rectangulo.mostrarPropiedades();


/*
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas,
 indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
 */

class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    igualQue(contacto) {
      return this.nombre.toLowerCase() === contacto.nombre.toLowerCase();
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.contactos = [];
      this.tamano = tamano;
    }
  
    aniadirContacto(contacto) {
      if (this.contactos.length >= this.tamano) {
        console.log("La agenda está llena, no se puede añadir más contactos.");
        return;
      }
      if (this.existeContacto(contacto)) {
        console.log("El contacto ya existe en la agenda.");
        return;
      }
      this.contactos.push(contacto);
      console.log("Contacto añadido a la agenda.");
    }
  
    existeContacto(contacto) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].igualQue(contacto)) {
          return true;
        }
      }
      return false;
    }
  
    listarContactos() {
      console.log("Lista de contactos:");
      for (let i = 0; i < this.contactos.length; i++) {
        console.log(
          `${this.contactos[i].nombre}: ${this.contactos[i].telefono}`
        );
      }
    }
  
    buscarContacto(nombre) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
          console.log(`El teléfono de ${nombre} es ${this.contactos[i].telefono}`);
          return;
        }
      }
      console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
    }
  
    eliminarContacto(contacto) {
      let indice = -1;
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].igualQue(contacto)) {
          indice = i;
          break;
        }
      }
      if (indice === -1) {
        console.log("El contacto no existe en la agenda.");
        return;
      }
      this.contactos.splice(indice, 1);
      console.log("Contacto eliminado de la agenda.");
    }
  
    agendaLlena() {
      return this.contactos.length >= this.tamano;
    }
  
    huecosLibres() {
      return this.tamano - this.contactos.length;
    }
  }
  
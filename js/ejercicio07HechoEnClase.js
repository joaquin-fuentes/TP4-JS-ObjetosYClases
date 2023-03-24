// Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.


class Contacto {
    #nombre;
    #telefono;
    constructor(nombre, telefono) {
      this.#nombre = nombre;
      this.#telefono = telefono;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    set nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
    get telefono() {
      return this.#telefono;
    }
  
    set telefono(nuevoTelefono) {
      this.#telefono = nuevoTelefono;
    }
  }
  
  class Agenda {
    #tamanio;
    constructor(tamanio) {
      this.contactos = [];
      this.#tamanio = tamanio;
    }
  
    get tamanio() {
      return this.#tamanio;
    }
  
    set tamanio(nuevoTamanio) {
      this.#tamanio = nuevoTamanio;
    }
  
    // metodos
    agregarContacto(contacto) {
      //si el contacto existe en la agenda
      if (!this.existeContacto(contacto.nombre)) {
        //tengo que preguntar si la agenda tiene espacios libres
        if (!this.agendaLlena()) {
          this.contactos.push(contacto);
          console.log("contacto agregado");
        }
      } else {
        console.log("El contacto ya existe no lo agrego");
      }
    }
  
    agendaLlena() {
      if (this.contactos.length === this.tamanio) {
        console.log("agenda llena");
        return true;
      } else {
        console.log("queda espacio");
        return false;
      }
    }
  
    existeContacto(nombreContacto) {
      // buscar el contacto en la agenda
      const existe = this.contactos.find(
        (contacto) => contacto.nombre === nombreContacto
      );
      if (existe) {
        console.log("El contacto existe");
        return true;
      } else {
        console.log("El contacto no existe");
        return false;
      }
    }
  
    listarContactos() {
      document.write("<h2>Lista de contactos</h2>");
      this.contactos.map((contacto) => {
        document.write(
          `<p>Nombre: ${contacto.nombre} - Telefono ${contacto.telefono}</p>`
        );
        console.log(`Nombre: ${contacto.nombre} - Telefono ${contacto.telefono}`);
      });
    }
  
    buscarContacto(nombreContacto) {
      const contactoBuscado = this.contactos.find(
        (contacto) => contacto.nombre === nombreContacto
      );
  
      if (contactoBuscado) {
        console.log(
          `Contacto encontrado, nombre:${contactoBuscado.nombre} - telefono: ${contactoBuscado.telefono}}`
        );
      } else {
        console.log("No encontramos el contacto buscado");
      }
    }
  
    eliminarContacto(nombreContacto){
      let contactosFiltrados = this.contactos.filter( contacto => contacto.nombre !== nombreContacto );
      if(contactosFiltrados.length === this.contactos.length){
          console.log('No borramos ningun contacto')
      }else{
          this.contactos = contactosFiltrados;
          console.log('Borramos al contacto '+ nombreContacto)
      }
    }
  
    espaciosDisponibles(){
      let espaciosDisponibles = this.tamanio - this.contactos.length;
      espaciosDisponibles > 0 ? console.log(`Espacios disponibles ${espaciosDisponibles}`):console.log(`No hay espacios disponibles`) 
    }
  
  
  }
  
  let nuevaAgenda = new Agenda(10);
  console.log(nuevaAgenda);
  
  do {
    let opcion = parseInt(
      prompt(`Seleccione una opción:
      1-Añadir Contacto
      2-Existe Contacto
      3-Listar Contactos
      4-Buscar Contacto 
      5-Eliminar Contacto
      6-Agenda Llena
      7-Huecos Libres
      8-Cambiar el tamaño de la agenda
      `)
    );
  
    switch (opcion) {
      case 1:
        // crear el contacto
        let nombre = prompt("Ingrese un nombre");
        let telefono = prompt("Ingrese un telefono");
  
        let nuevoContacto = new Contacto(nombre, telefono);
  
        nuevaAgenda.agregarContacto(nuevoContacto);
  
        console.log(nuevaAgenda);
  
        break;
      case 2:
        let nombreBuscado = prompt("Ingrese el nombre");
        nuevaAgenda.existeContacto(nombreBuscado);
  
        break;
      case 3:
        nuevaAgenda.listarContactos();
        break;
      case 4:
        const nombreSolicitado = prompt('Ingrese el nombre que desea buscar');
        nuevaAgenda.buscarContacto(nombreSolicitado)
        break;
      case 5:
        const eliminarPersona = prompt('Ingrese el nombre de la persona que desea borrar');
        nuevaAgenda.eliminarContacto(eliminarPersona);
  
        break;
      case 6:
        document.write(
          `<p>¿La agenta esta llena? ${nuevaAgenda.agendaLlena()}</P>`
        );
        break;
      case 7:
        nuevaAgenda.espaciosDisponibles();
        break;
      case 8:
          const nuevoTamanio = parseInt(prompt('Ingrese la nueva dimension de la agenda'));
          nuevaAgenda.tamanio = nuevoTamanio;
          console.log('actualizamos el tamaño de la agenda a '+nuevoTamanio+' elementos')
        break;
      default:
          console.log('ingreso una opcion invalida')
    }
  } while (confirm("¿desea realizar otra operacion?"));
  
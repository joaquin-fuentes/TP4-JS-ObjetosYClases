/*
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta
 */

let cuenta = {
    titular : "Alex",
    saldo : "0",

    ingresar: (cantidad)=>{
        cuenta.saldo = cuenta.saldo + cantidad;
    },
    extraer: (cantidad)=>{
        cuenta.saldo = cuenta.saldo - cantidad;
    },
    informar: ()=>{
        let titular = cuenta.titular;
        let saldo = cuenta.saldo;

        document.write(`<h1> Estado de cuenta </h1>`)
        document.write(`<p>  Titular: ${titular} </p>`)
        document.write(`<p>  Saldo: ${saldo} </p>`) 
    }
}
cuenta.informar();
cuenta.ingresar(500);
cuenta.extraer(50);
cuenta.ingresar(150);
cuenta.informar();

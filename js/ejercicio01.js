/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.
 */

let auto = {
    color: "azul",
    marca: "ford",
    modelo: "fiesta",
    encendido: false,

    encender: ()=> {
        auto.encendido = true;
        document.write(`<p> El auto encendió </p>`);
    },
    apagar: ()=> {
        auto.encendido = false;
        document.write(`<p> El auto se apagó </p>`);
    }
}

auto.encender();
document.write(`encendido = ${auto.encendido}`);
auto.apagar();
document.write(`encendido = ${auto.encendido}`);


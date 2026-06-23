/**
 * Estructura de Datos: Cola (Queue)
 * Caso de Uso: Sistema de Gestión de Turnos Bancarios
 * Regla: FIFO (First In, First Out)
 */

class SistemaTurnosBanco {
    constructor() {
        this.cola = []; // Array muestra los clientes
    }

    // Cola: Llega un cliente y se registra al final de la línea
    registrarCliente(nombreCliente) {
        this.cola.push(nombreCliente);
        console.log(`Turno emitido para: ${nombreCliente}. Hay ${this.cola.length} persona(s) en espera.`);
    }

    // 2. Desencolar: El asesor atiende al cliente que más tiempo lleva esperando
    atenderSiguiente() {
        if (this.estaVacia()) {
            console.log(" No hay clientes en la cola de espera.");
            return null;
        }
        
        // .shift() elimina y devuelve el PRIMER elemento del array
        const clienteAtendido = this.cola.shift(); 
        console.log(`Asesor llamando a: ¡${clienteAtendido}! Favor de pasar a ventanilla.`);
        return clienteAtendido;
    }

    // 3. Ver Primero quién es el próximo en ser atendido sin sacarlo de la cola
    verSiguienteEnFila() {
        if (this.estaVacia()) {
            console.log("La cola está vacía.");
            return null;
        }
        return this.cola[0];
    }

    // Verificar si la cola está vacía
    estaVacia() {
        return this.cola.length === 0;
    }

    //Mostrar el estado actual de la fila
    mostrarFila() {
        console.log(`\n Fila actual: [ ${this.cola.join(" <- ")} ]\n`);
    }
}

const bancoDelProgreso = new SistemaTurnosBanco();

console.log("--- Apertura del Banco y Registro de Clientes ---");
bancoDelProgreso.registrarCliente("Carlos Mendoza");
bancoDelProgreso.registrarCliente("Ana Gómez");
bancoDelProgreso.registrarCliente("Luis Martínez");

bancoDelProgreso.mostrarFila();
console.log("---  Inicio de Atención en Ventanillas ---");
bancoDelProgreso.atenderSiguiente(); // Atiende a Carlos (el primero que llegó)
bancoDelProgreso.atenderSiguiente(); // Atiende a Ana

console.log(`\n Próximo absoluto en la fila: ${bancoDelProgreso.verSiguienteEnFila()}`);

bancoDelProgreso.mostrarFila();

bancoDelProgreso.atenderSiguiente(); // Atiende a Luis
bancoDelProgreso.atenderSiguiente(); //Ya no hay mas en la fila
const MAX = 5; 
let colaCircular = new Array(MAX).fill(null);
let frente = -1;
let final = -1;

function registrarVehiculo(placa) {
    if (!placa || placa === "") {
        console.log(" Por favor, ingrese una placa válida.");
        return;
    }

    if ((final + 1) % MAX === frente) {
        console.log("Fila de peaje llena. Detenga el acceso vehicular.");
        return;
    }

    if (frente === -1) {
        frente = 0;
    }

    final = (final + 1) % MAX;
    colaCircular[final] = placa;

    console.log(`Vehículo registrado: ${placa} (Frente: ${frente}, Final: ${final})`);
    mostrarFilaPeaje();
}

function pagarPeaje() {
    if (frente === -1) {
        console.log(" No existen vehículos en la fila del peaje.");
        return;
    }

    const vehiculoAtendido = colaCircular[frente];
    colaCircular[frente] = null; 

    console.log(` Vehículo [${vehiculoAtendido}] canceló peaje. ¡Barrera abierta!`);

    if (frente === final) {
        frente = -1;
        final = -1;
    } else {
        frente = (frente + 1) % MAX;
    }

    mostrarFilaPeaje();
}

function mostrarFilaPeaje() {
    if (frente === -1) {
        console.log("Fila vacía: [ ]\n");
        return;
    }
    
    let elementos = [];
    let i = frente;
    while (true) {
        elementos.push(`(Celda ${i}: ${colaCircular[i]})`);
        if (i === final) break;
        i = (i + 1) % MAX;
    }
    console.log(` Fila actual: ${elementos.join(" <- ")}\n`);
}

// ==========================================
//  PRUEBAS MANUALES 
// ==========================================
console.log("---  Simulando Llegada de Vehículos ---");
registrarVehiculo("ABC-1234");
registrarVehiculo("XYZ-9876");
registrarVehiculo("LBA-5555");

console.log("--- Procesando Pagos ---");
pagarPeaje();
pagarPeaje();

console.log("--- Demostrando que es Circular (Reutilización de celdas) ---");
registrarVehiculo("PRO-2026");
registrarVehiculo("UNL-0001");
registrarVehiculo("EXT-7777"); // límite del arreglo MAX
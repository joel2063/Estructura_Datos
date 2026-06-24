function invertirArreglo(arr, inicio, fin) {
    // TODO: Identificar la condición de parada (Caso Base)

    if (inicio >= fin) {
        return;
    }

    let temp = arr[inicio];
    arr[inicio] = arr[fin];
    arr[fin] = temp;

    invertirArreglo(arr, inicio + 1, fin - 1);
}

// Casos de prueba para validación
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.log(miLista);
console.log("Ejercicio 2.1 superado.");

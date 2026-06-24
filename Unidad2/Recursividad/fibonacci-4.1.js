function mostrarArbol(n, nivel = "") {

    console.log(nivel + n);

    if (n <= 1) {
        return;
    }

    mostrarArbol(n - 1, nivel + "├─ ");
    mostrarArbol(n - 2, nivel + "└─ ");
}

function fibonacci(n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Árbol de llamadas:");
mostrarArbol(4);

console.log("\nResultado =", fibonacci(4));

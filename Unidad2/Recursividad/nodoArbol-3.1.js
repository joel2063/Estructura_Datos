class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

// Inorden: Izq -> Raíz -> Der
function recorridoInorden(raiz) {
    if (raiz === null) {
        return [];
    }

    return [
        ...recorridoInorden(raiz.izquierdo),
        raiz.valor,
        ...recorridoInorden(raiz.derecho)
    ];
}

// Preorden: Raíz -> Izq -> Der
function recorridoPreorden(raiz) {
    if (raiz === null) {
        return [];
    }

    return [
        raiz.valor,
        ...recorridoPreorden(raiz.izquierdo),
        ...recorridoPreorden(raiz.derecho)
    ];
}

// Postorden: Izq -> Der -> Raíz
function recorridoPostorden(raiz) {
    if (raiz === null) {
        return [];
    }

    return [
        ...recorridoPostorden(raiz.izquierdo),
        ...recorridoPostorden(raiz.derecho),
        raiz.valor
    ];
}

// Crear árbol de prueba
let raiz = new NodoArbol(1);

raiz.izquierdo = new NodoArbol(2);
raiz.derecho = new NodoArbol(3);

raiz.izquierdo.izquierdo = new NodoArbol(4);
raiz.izquierdo.derecho = new NodoArbol(5);

// Mostrar recorridos
console.log("Inorden:", recorridoInorden(raiz));
console.log("Preorden:", recorridoPreorden(raiz));
console.log("Postorden:", recorridoPostorden(raiz));
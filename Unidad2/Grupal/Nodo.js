// =====================================
// Clase NodoAVL
// =====================================
class NodoAVL {
    constructor(valor) {
        this.valor = valor;
        this.altura = 1; // Un nodo hoja inicia con altura 1
        this.izquierdo = null;
        this.derecho = null;
    }
}

// =====================================
// Clase ArbolAVL
// =====================================
class ArbolAVL {
    constructor() {
        this.raiz = null;
    }

    // Obtener altura de forma segura
    getAltura(nodo) {
        return nodo === null ? 0 : nodo.altura;
    }

    // Actualizar altura del nodo
    actualizarAltura(nodo) {
        nodo.altura = 1 + Math.max(
            this.getAltura(nodo.izquierdo),
            this.getAltura(nodo.derecho)
        );
    }

    // Obtener factor de balance
    getBalance(nodo) {
        return nodo === null
            ? 0
            : this.getAltura(nodo.izquierdo) - this.getAltura(nodo.derecho);
    }

    // Rotación simple a la derecha
    rotacionDerecha(y) {
        let x = y.izquierdo;
        let T2 = x.derecho;

        x.derecho = y;
        y.izquierdo = T2;

        this.actualizarAltura(y);
        this.actualizarAltura(x);

        return x;
    }

    // Rotación simple a la izquierda
    rotacionIzquierda(x) {
        let y = x.derecho;
        let T2 = y.izquierdo;

        y.izquierdo = x;
        x.derecho = T2;

        this.actualizarAltura(x);
        this.actualizarAltura(y);

        return y;
    }

    // Insertar valor
    insertar(valor) {
        this.raiz = this.insertarRec(this.raiz, valor);
    }

    // Inserción recursiva AVL
    insertarRec(nodo, valor) {

        // Inserción BST normal
        if (nodo === null) {
            return new NodoAVL(valor);
        }

        if (valor < nodo.valor) {
            nodo.izquierdo = this.insertarRec(nodo.izquierdo, valor);
        } else if (valor > nodo.valor) {
            nodo.derecho = this.insertarRec(nodo.derecho, valor);
        } else {
            return nodo; // No se permiten duplicados
        }

        // Actualizar altura
        this.actualizarAltura(nodo);

        // Calcular balance
        let balance = this.getBalance(nodo);

        // Caso LL
        if (balance > 1 && valor < nodo.izquierdo.valor) {
            return this.rotacionDerecha(nodo);
        }

        // Caso RR
        if (balance < -1 && valor > nodo.derecho.valor) {
            return this.rotacionIzquierda(nodo);
        }

        // Caso LR
        if (balance > 1 && valor > nodo.izquierdo.valor) {
            nodo.izquierdo = this.rotacionIzquierda(nodo.izquierdo);
            return this.rotacionDerecha(nodo);
        }

        // Caso RL
        if (balance < -1 && valor < nodo.derecho.valor) {
            nodo.derecho = this.rotacionDerecha(nodo.derecho);
            return this.rotacionIzquierda(nodo);
        }

        return nodo;
    }

    // Altura total del árbol
    alturaArbol() {
        return this.getAltura(this.raiz);
    }

    // Imprimir árbol de forma visual
    imprimir(nodo, nivel = 0) {
        if (nodo !== null) {
            this.imprimir(nodo.derecho, nivel + 1);
            console.log("   ".repeat(nivel) + nodo.valor);
            this.imprimir(nodo.izquierdo, nivel + 1);
        }
    }

    imprimirArbol() {
        this.imprimir(this.raiz);
    }
}

// =====================================
// MAIN - Pruebas
// =====================================

// Caso LL
console.log("\n=== Caso LL ===");
let avl1 = new ArbolAVL();
avl1.insertar(30);
avl1.insertar(20);
avl1.insertar(10);
avl1.imprimirArbol();

// Caso RR
console.log("\n=== Caso RR ===");
let avl2 = new ArbolAVL();
avl2.insertar(10);
avl2.insertar(20);
avl2.insertar(30);
avl2.imprimirArbol();

// Caso LR
console.log("\n=== Caso LR ===");
let avl3 = new ArbolAVL();
avl3.insertar(30);
avl3.insertar(10);
avl3.insertar(20);
avl3.imprimirArbol();

// Caso RL
console.log("\n=== Caso RL ===");
let avl4 = new ArbolAVL();
avl4.insertar(10);
avl4.insertar(30);
avl4.insertar(20);
avl4.imprimirArbol();

// Prueba masiva
console.log("\n=== Inserción del 1 al 10 ===");
let avl5 = new ArbolAVL();

for (let i = 1; i <= 10; i++) {
    avl5.insertar(i);
}

avl5.imprimirArbol();
console.log("\nAltura del árbol:", avl5.alturaArbol());
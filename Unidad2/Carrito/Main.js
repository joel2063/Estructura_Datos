const Producto = require('./Producto');
const Carrito = require('./Carrito');

class Main {
  constructor(listaProductos) {
    this.productos = listaProductos;
    this.carrito = new Carrito();
  }

  agregarAlCarrito(idProducto) {
    const producto = this.productos.find(
      producto => producto.id === idProducto
    );

    if (producto) {
      this.carrito.agregarProducto(producto);
    }
  }

  comprar() {
    if (this.carrito.estaVacio()) {
      console.log("El carrito está vacío.");
      return;
    }

    console.log("\n=== COMPRA REALIZADA ===");
    console.log("Total: $" + this.carrito.calcularTotal().toFixed(2));

    this.carrito.vaciar();
  }
}

// ===== DATOS =====
const productos = [
  new Producto(1, "Manzana", "Frutas", 0.50),
  new Producto(2, "Leche", "Lacteos", 1.20),
  new Producto(3, "Pan", "Panaderia", 0.80)
];

// ===== INICIAR SISTEMA =====
const sistema = new Main(productos);

// ===== PRUEBAS =====
sistema.agregarAlCarrito(1);
sistema.agregarAlCarrito(2);
sistema.agregarAlCarrito(1);

console.log("=== PRODUCTOS EN EL CARRITO ===");
console.log(sistema.carrito.obtenerItems());

console.log("\n=== TOTAL ===");
console.log("$" + sistema.carrito.calcularTotal().toFixed(2));

sistema.comprar();
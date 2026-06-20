class Carrito {
  constructor() {
    this.items = new Map();
  }

  agregarProducto(producto) {
    if (this.items.has(producto.id)) {
      this.items.get(producto.id).cantidad++;
    } else {
      this.items.set(producto.id, {
        producto,
        cantidad: 1
      });
    }
  }

  aumentarCantidad(idProducto) {
    const item = this.items.get(idProducto);
    if (item) item.cantidad++;
  }

  disminuirCantidad(idProducto) {
    const item = this.items.get(idProducto);

    if (!item) return;

    item.cantidad--;

    if (item.cantidad <= 0) {
      this.items.delete(idProducto);
    }
  }

  eliminarProducto(idProducto) {
    this.items.delete(idProducto);
  }

  vaciar() {
    this.items.clear();
  }

  estaVacio() {
    return this.items.size === 0;
  }

  contarArticulos() {
    let total = 0;

    for (const item of this.items.values()) {
      total += item.cantidad;
    }

    return total;
  }

  calcularTotal() {
    let total = 0;

    for (const item of this.items.values()) {
      total += item.producto.precio * item.cantidad;
    }

    return total;
  }

  obtenerItems() {
    return Array.from(this.items.values());
  }
}
module.exports = Carrito;

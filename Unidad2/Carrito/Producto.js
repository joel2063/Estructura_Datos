class Producto {
  constructor(id, nombre, categoria, precio) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }

  precioFormateado() {
    return `$${this.precio.toFixed(2)}`;
  }
}
module.exports = Producto;

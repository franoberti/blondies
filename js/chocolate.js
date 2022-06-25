class Chocolate {

    constructor(nombre, descripcion, tamano, stock, precio) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.tamano = tamano
        this.stock = stock
        this.precio = precio
    }

    precioCompra(cantidad) {
        return this.precio * cantidad
    }

}  
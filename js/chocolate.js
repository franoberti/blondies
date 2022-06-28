class Chocolate {

    constructor(nombre, descripcion, tamano, stock, precio, cantEnCart) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.tamano = tamano
        this.stock = stock
        this.precio = precio
        this.cantidadEnCarrito = cantEnCart
    }

    precioCompra(cantidad) {
        return this.precio * cantidad
    }

}  
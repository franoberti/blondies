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

function agregarACarrito(){

    console.table(chocolates)
    const numChoco = prompt("Ingrese el numero de Chocolate que desea agregar al carrito")

    carrito.push(chocolates[numChoco])

    console.log("Estos son los productos que hay en tu carrito")
    console.table(carrito)
    
}
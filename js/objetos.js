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

function registrarChocolate() {

    var nomChoco = prompt("Ingrese el nombre del chocolate:")
    while (nomChoco == "") {
        alert("Debe ingresar un nombre valido")
        var nomChoco = prompt("Ingrese el nombre del chocolate:")
    }

    var desChoco = prompt("Ingrese la descripcion del chocolate:")
    while (desChoco == "") {
        alert("Debe ingresar una descripcion valida")
        var desChoco = prompt("Ingrese la descripcion del chocolate:")
    }

    var tamChoco = prompt("Ingrese el tamaño del chocolate ('Chico', 'Mediano' o 'Grande'):")
    while (tamChoco != "Chico" & tamChoco != "Mediano" & tamChoco != "Grande") {
        alert("Debe ingresar un tamaño valido")
        var tamChoco = prompt("Ingrese el tamaño del chocolate ('Chico', 'Mediano' o 'Grande'):")
    }
    var stockChoco = 10
    var precioChoco = parseInt(prompt("Ingrese el precio del chocolate:")) 

    const chocolate = new Chocolate(nomChoco, desChoco, tamChoco, stockChoco, precioChoco)

    chocolates.push(chocolate)

    console.table(chocolates)
}

function calcularPrecioCarrito() {

    const total = carrito.reduce((acumulator, c) => acumulator + c.precio, 0)
    
    console.log("El precio total del carrito es", total)

}

function mostrarCarrito() {


    const carrito = JSON.parse(localStorage.getItem("carrito")) || "carritoVacio"
    
    carrito === "carritoVacio" ? carritoVacio() : getCarrito(carrito)

}

const carritoVacio = () => {
    const trCarrito = document.createElement("tr")
    trCarrito.id = "CarritoVacio"
    trCarrito.innerHTML = `<td> Tu carrito esta vacio </td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>`
    listadoCarrito.append(trCarrito)
}

const getCarrito = (carrito) => {
    carrito.forEach(choco => {
        const idTr = choco + "enCarrito"
        const trCarrito = document.createElement("tr")
        trCarrito.id = idTr
        trCarrito.innerHTML = `<td> ${choco.nombre} </td>
                               <td> $ ${choco.precio}.00 </td>
                               <td> ${choco.cantidadEnCarrito} </td>
                               <td> $ ${choco.precio*choco.cantidadEnCarrito}.00 </td>
                               <td> <i class="fa fa-trash-can" onclick=onclickTrash(${choco.id})></i> </td>`
        listadoCarrito.append(trCarrito)
    });
}


function onclickTrash(id){
    borrarDeCarrito(id)
}

function borrarDeCarrito(id){

    const datosCarrito = JSON.parse(localStorage.getItem("carrito"))

    let idAEliminar
    let i = 0
    datosCarrito.forEach(chocolate => {
        chocolate.id === id && (idAEliminar = i)
        i++
    })

    datosCarrito.splice(idAEliminar, 1)

    let carritoA = JSON.stringify(datosCarrito)

    localStorage.setItem("carrito", carritoA)
    location.reload()

}

mostrarCarrito()
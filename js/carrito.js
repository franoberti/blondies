function mostrarCarrito() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || "carritoVacio"

    if(localStorage.getItem("carrito").length == 2){
        carrito = "carritoVacio"
    }
    
    if(carrito == "carritoVacio"){
        carritoVacio()
    }
    else{
        getCarrito(carrito)
    }

}

const carritoVacio = () => {
    const trCarrito = document.createElement("tr")
    trCarrito.id = "CarritoVacio"
    trCarrito.innerHTML = `<td></td>
                           <td></td>
                           <td>Tu carrito esta vacio</td>
                           <td></td>
                           <td></td>`
    listadoCarrito.append(trCarrito)
}

const getCarrito = (carrito) => {

    carrito.forEach(choco => {
        const trCarrito = document.createElement("tr")
        trCarrito.innerHTML = `<td> ${choco.nombre} </td>
                               <td class="text-center"> $ ${choco.precio}.00 </td>
                               <td class="text-center"> ${choco.cantCarrito} </td>
                               <td class="text-center"> $ ${choco.precio*choco.cantCarrito}.00 </td>
                               <td class="text-center"> <i class="fa fa-trash-can" onclick=onclickTrash(${choco.id})></i> </td>`
        listadoCarrito.append(trCarrito)
    });
} 

function onclickTrash(id){
    
    Swal.fire({
        title: 'Atención',
        text: "¿Estás seguro que quieres eliminar este chocolate del carrito?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.value) {
            borrarDeCarrito(id)
        }
      })
    
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
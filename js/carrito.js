
function mostrarCarrito() {

    JSON.parse(localStorage.getItem("carrito")).forEach(choco => {
        const idTr = choco + "enCarrito"
        const trCarrito = document.createElement("tr")
        trCarrito.id = idTr
        trCarrito.innerHTML = `<td> ${choco.nombre} </td>
                               <td> ${choco.precio} </td>`
        listadoCarrito.append(trCarrito)
    });

}

mostrarCarrito()
document.addEventListener("DOMContentLoaded", ()=> {

    setTimeout(() => {
       obtenerChocolates(url)      
    }, 1500);
 })

const agregarACarrito = (idChoco) => {

    debugger
    if(localStorage.getItem("carrito")){

        const datosCarrito = JSON.parse(localStorage.getItem("carrito"))

        let existe = false
        datosCarrito.forEach(chocolate => {
            if(chocolate.id === idChoco){
                chocolate.cantCarrito = parseInt(chocolate.cantCarrito) + 1
                existe = true
            }
        })
        if(existe == false){
            chocolates.forEach(chocoActual => {
                if(chocoActual.id == idChoco){
                    const choco = new Chocolate(idChoco, chocoActual.nombre, chocoActual.descripcion, chocoActual.cantCarrito, chocoActual.precio)
                    datosCarrito.push(choco)
                }
            })
        }

        let carritoA = JSON.stringify(datosCarrito)

        localStorage.setItem("carrito", carritoA)
    }
    else {
        const datoCarrito = []

        chocolates.forEach(chocoActual => {
            if(chocoActual.id == idChoco){
                const choco = new Chocolate(idChoco, chocoActual.nombre, chocoActual.descripcion, chocoActual.cantCarrito, chocoActual.precio)
                datoCarrito.push(choco)
            }
        })
        
        let carritoA = JSON.stringify(datoCarrito)

        localStorage.setItem("carrito", carritoA)
    }

    Swal.fire({
        title: "¡Agregado al carrito!",
        timer: 1000
    })

}

 const retornoCardContenido = (chocolate)=> {

    const {id, nombre, descripcion, img, precio, cantidadEnCart} = chocolate

    const choco = new Chocolate(id, nombre, descripcion, cantidadEnCart, precio)

    chocolates.push(choco)

    let ChocoCard = ""
    ChocoCard += `<div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="${img}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text"> $ ${precio}.00</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                                <span class="btn btn-success" id="btnChoco${id}" onclick="agregarACarrito('${id}')">Agregar</span>
                            </div>
                        </div>
                    </div>
                </div>`

    return ChocoCard
 }
 


 const retornoCardError = ()=> {
    let HTMLCardError = `<div class="text-center"> 
                            <div class="text-center">
                                <h3>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h3> 
                            </div> 
                            <div class="text-center">
                                <img src="../assets/nubeError100.png" alt="cart">
                            </div>
                         </div>`
       return HTMLCardError
 }

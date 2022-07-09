const obtenerChocolates = (URL)=> {

    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> { 
          data.forEach(contenido => {
            chocoCards += retornoCardContenido(contenido)
          })
          containerCards.innerHTML = chocoCards
       })
    .catch((err)=> {
        containerCards.innerHTML = retornoCardError()
    })
    .finally(()=> cargandoHTML.innerHTML = "")
}

const getCarritoBD = (carritoConIds) => {

    const carritoLocal = []

    fetch(url)
    .then((response) => response.json())
    .then((data) => {

    carritoConIds.forEach(id => {

        data.forEach(choco => {
            if(choco.id == id ){
                const idChoco = choco.id
                const nomChoco = choco.nombre
                const descChoco = choco.descripcion
                const tamChoco = choco.tamano
                const stockChoco = choco.stock
                const precioChoco = choco.precio

                const chocoCarrito = new Chocolate (idChoco,nomChoco,descChoco,tamChoco,stockChoco,precioChoco)

                carritoLocal.push(chocoCarrito)
            }
        })
  
    })
    
    return carritoLocal

    })

    
    
}
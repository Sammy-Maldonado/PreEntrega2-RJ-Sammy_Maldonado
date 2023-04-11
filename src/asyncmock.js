const products = [
    {nombre: "Bounce", precio: 5000, id:"1", img: "../img/bounce.png", idCat:"2"},
    {nombre: "CoinJet", precio: 5000, id:"2", img: "../img/coinjet.png", idCat:"3"},
    {nombre: "Roxine", precio: 5000, id:"3", img: "../img/roxine.png", idCat:"2"},
    {nombre: "RealtyElite", precio: 5000, id:"4", img: "../img/realtyelite.png", idCat:"3"},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 500)
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = products.find(products => products.id === id);
            resolve(producto);
        }, 500)
    })
}


//Creamos una nueva funcion que retorna la categoría.

export const getProductosPorCategoria = (idCat) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = products.filter(prod => prod.idCat === idCat)
            resolve(productosCategoria)
        }, 500)
    })
}
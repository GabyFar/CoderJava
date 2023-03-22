



class Compra {
    constructor(carrito){
        this.carrito = carrito
}


obtenerSubtotal(){
    if (this.carrito.length > 0){
    return this.carrito.reduce((acc, figura)=>acc + figura.precio, 0)
} else{}
return '⚠Error el carrito esta vacio'
}


confirmarCompra(){
    if (this.obtenerSubtotal() !== '⚠Error en el carrito esta vacio' ){
    return `Confirmamos el pado de $ ${this.obtenerSubtotal()}. \n Gracias por tu compra`
    } else {
        return `⚠Error en la transaccion, intenta nuevamente en unos minutos.`

}
}
}
 





const carrito = []

const mensajeInicial = "Elije tu figura ingresando el Codigo de la misma:"

const figuras = [{imagen: '/imagen/batman.png', codigo: 01, tipo: 'Batman', precio: 10261},
                {imagen: '/imagen/superman.png', codigo: 02, tipo: 'Superman', precio: 10710},
                {imagen: '/imagen/catwoman.png', codigo: 03, tipo: 'Catwoman', precio: 10892},
                {imagen: '/imagen/wonderwoman.png', codigo: 04, tipo: 'WonderWoman', precio: 10264},
                {imagen: '/imagen/capitanamerica.png', codigo: 05, tipo: 'CapitanAmerica', precio: 11528},
                {imagen: '/imagen/hulk.png', codigo: 06, tipo: 'Hulk', precio: 11047},
                {imagen: '/imagen/blackcat.png', codigo: 07, tipo: 'BlackCat', precio: 112654},
                {imagen: '/imagen/capitanmarvel.png', codigo: 08, tipo: 'CapitanMarvel', precio: 11215},
                {imagen: '/imagen/doomtrooper.png', codigo: 09, tipo: 'DoomTrooper', precio: 19812},
                {imagen: '/imagen/dukenukem.png', codigo: 10, tipo: 'DukeNukem', precio: 20158}]
            


function buscafigura(codigo) {

    let resultado = figuras.find((figura)=> figura.codigo === parseInt(codigo))

        return resultado

            }
function verCarrito() {

                console.table(carrito)

            }
function finalizarCompra(){

        if (carrito.length > 0){

const shopping = new Compra (carrito)
          alert(`El costo del carrito es de $ ${shopping.obtenerSubtotal()}`)

    let respuesta = confirm("quiere realizar el pago?")

        if (respuesta) {

          alert(shopping.confirmarCompra())

                carrito.length = 0 
                }

        }else{

                console.warn("El carrito esta vacio")

              }
            }
function comprar() {
    let codigo = prompt(mensajeInicial)

        if (!parseInt(codigo)){

          alert("⚠Error del codigo ingresado")

    let respuesta = confirm("reintentar?")

        if (respuesta) {

        comprar()
        }

        return

          finalizarCompra()

    let figuraElegida = buscarFigura(codigo)
        if (figuraElegida !== undefined) {
          alert(`${figuraElegida.imagen} La Figura ${figuraElegida.tipo} se agrego al carrito`)
            carrito.push(figuraElegida)
    let respuesta = confirm("quiere seguir comprando?")
        if (respuesta) {
            comprar()
      }else{
            finalizarCompra()
            }
      }else{
              alert("⚠Error del codigo ingresado")
    let respuesta = confirm("reintentar?")
        if (respuesta){
            comprar()
              }
      return
            }
          }
      }
    




import productos from '../../productos.mjs'

export function obtenerTodos(){
    return productos
}
export function obtenerUno(id){
    const id_producto = Number(id)
    const productosFiltrados = productos.datos.filter((producto)=>{
        return Number(producto.id) ===  id_producto
    })
    return productosFiltrados
}
export function eliminarUno(id){
    const id_producto = Number(id)
    const cantidadItemsArreglo = productos.datos.length
    productos.datos.foreach((producto, indice)=>{
        if(Number(producto.id) === id_producto){
            productos.datos.splice(indice, 1)
        }
    })
    if(cantidadItemsArreglo > productos.datos.length){
        return true
    }else{
        return false
    }
}
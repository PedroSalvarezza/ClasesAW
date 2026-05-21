import pg from '../../conexion.bd.mjs'


export async function obtenerTodos() {
    const resultado = await pg.query('SELECT * FROM productos')
    // console.log(resultado.rows)
    return resultado.rows //<- como se entregan los datos
}




export async function obtenerUno(id) {
    const id_producto = Number(id)
    const resultado = await pg.query('SELECT * FROM productos where id =$1', [id_producto] )
    return resultado.rows
}
export async function eliminarUno(id) {
    const id_producto = Number(id)
    const cantidadItemsArreglo = productos.datos.length
    const resultado = await pg.query('DELETE FROM productos where id =$1', [id_producto] )
    if(cantidadItemsArreglo > productos.datos.length){
        return true
    }else{
        return false
    }
}
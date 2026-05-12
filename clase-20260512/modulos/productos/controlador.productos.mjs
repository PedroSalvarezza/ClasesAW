import * as modelo from './modelo.productos.mjs'

export function obtenerTodos(req, res){
    const productos = modelo.obtenerTodos()
    res.json(productos)
}
export function obtenerUno(req,res){
    const id_producto = req.params.id
    const productos = modelo.obtenerUno(id_producto)
    if(productos.length> 0){
        res.json(productos)
    }else{
        res.status(404).json({mensaje:'Producto no encontrado'})
    }
}

export function eliminarUno(req, res){
    const id_producto = req.params.id
    const productoEliminado = modelo.eliminarUno(id_producto)
    if(productoEliminado){
        res.json({mensaje:'Producto eliminado'})
    }else{
        res.json({mensaje:'Producto no eliminado'})

    }
}
import productos from "./productos.mjs"
export function obtenerProductos(req, res){
    res.json(productos)
}
export function obtenerProducto(req, res){
    const id = parseInt(req.params.id)
    const resultado = productos.filter(p => p.id === id)

    if (resultado.length === 0) {
        return res.status(404).json({ mensaje: "Producto no encontrado" })
    }

    res.json(resultado)
}
export function eliminarProducto(req, res){
    const id = parseInt(req.params.id)
    const resultado = productos.filter(p => p.id !== id)

    if (resultado.length === 0) {
        return res.status(404).json({ mensaje: "Producto no encontrado" })
    }

    res.json(resultado)
}
export function altaProducto(req, res) {
    const producto = req.body
    const productoFinal = {
        id: productos.ultimo_id + 1,
        ...producto
    }

    productos.datos.push(productoFinal)

    productos.ultimo_id = productos.ultimo_id + 1
    res.status(201).json({mensaje: 'Producto cargado'})
}
export function modificarProducto(req, res) {
    const id = parseInt(req.params.id)
    const productoIngresado = req.body
    
    productos.datos.map((producto)=>{
        if(Number(producto.id) === id){
            const indice = productos.datos.indexOf(producto)
            productos.datos[indice] = {
                id: id,
                ...productoIngresado
            }
        }
    })
    res.json({mensaje: 'Producto modificado en id ' + id})
}
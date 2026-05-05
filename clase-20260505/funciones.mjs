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
// export function eliminarProducto(req, res) {
//     const id = parseInt(req.params.id)

//     // 1. Primero verificar si existe
//     const existe = productos.some(p => p.id === id)
//     if (!existe) {
//         return res.status(404).json({ mensaje: "Producto no encontrado" })
//     }

//     // 2. Recién ahí filtrar y mutar
//     productos = productos.filter(p => p.id !== id)

//     res.json({ mensaje: "Producto eliminado correctamente" })
// }
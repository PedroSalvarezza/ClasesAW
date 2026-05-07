import express from 'express'
import {obtenerProductos, obtenerProducto, eliminarProducto, altaProducto, modificarProducto} from './funciones.mjs'
//import productos from './productos.mjs'
const puerto = 3000
const app = express()
app.use(express.json())


//GET /api/v1/productos

app.get('/api/v1/productos', obtenerProductos)
//GET /api/v1/productos/:id
app.get('/api/v1/productos/:id', obtenerProducto)
//POST /api/v1/productos
app.post('/api/v1/productos', altaProducto)
//PUT /api/v1/productos/:id
app.put('/api/v1/productos/:id', modificarProducto)
//DELETE /api/v1/productos/:id
app.delete('/api/v1/productos/:id', eliminarProducto)
app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`)
})
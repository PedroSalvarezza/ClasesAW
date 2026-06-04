// Clase para trabajar con agrupamiento de rutas
import {Router} from 'express'
// Importamos las funciones del controlador
import * as controlador from './controlador.productos.mjs'

const rutasProductos = new Router()

rutasProductos.get('/api/v1/productos', controlador.obtenerTodos) //<-- callback sin los paréntesis
rutasProductos.post('/api/v1/productos', controlador.crearUno) //<-- callback sin los paréntesis

// Exportamos
export default rutasProductos

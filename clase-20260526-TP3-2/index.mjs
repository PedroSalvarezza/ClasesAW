import express from 'express'
import path from 'node:path'
import './iniciar.env.mjs'
// Importamos rutas del modulo productos
import rutasModuloProductos from './modulos/productos/rutas.productos.mjs'

// Variables de entorno
// Como acceder?
// console.log(process.env.PUERTO)

const PUERTO = process.env.PUERTO || 3000

const app = express()
// Le avisamos a express que use las rutas del modulo productos
// API REST

app.use(rutasModuloProductos)

// Front web
app.use(express.static(path.resolve('./publico')))
// Vinculamos el front
app.use('/admin', express.static(path.resolve('./front-crud')))
// Configuramos carpeta para servir los archivos
app.use('/archivos',express.static(path.resolve('./archivos')))

app.listen(PUERTO, ()=>{
    console.log(`Servidor en http://localhost:3000`)
})

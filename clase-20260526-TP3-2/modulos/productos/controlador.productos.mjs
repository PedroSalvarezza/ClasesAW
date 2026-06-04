import multer from 'multer'
import * as modelo from './modelo.productos.mjs'
import path from 'node:path'
// ------------------
// Multer

// Instanciamos multer
const subirArchivo = multer({
    dest: path.join('archivos')
})
// configuramos single
const manejarArchivo = subirArchivo.single('archivo') //<----- devuelve una funcion 
// ------------------


export async function obtenerTodos(req, res){
    // Obtenemos la consulta a BD desde la capa modelo
    const respuesta = await modelo.obtenerTodos()//<--- funcion asíncrona
    // Respuesta tiene todos los datos de la consulta
    const respuestaDatos = respuesta.rows //<-- opcional pasarlo a capa vista
    /*
    respuesta:
    consulta,
    campos,
    datos de la tabla -> rows <---- Arreglo
    */
    
    res.json(respuestaDatos) //<--- ese arreglo
}


// POST
export async function crearUno(req, res){
    console.log('POST')
    // manejamos el archivo
    manejarArchivo(req, res, async (error)=>{
        console.log(req)
        // Si hay error
        if(error) return res.status(500).json({mensaje: 'error en el servidor'})

        // Insertar a BD

         // Obtener los datos del formulario
        // Si no
        console.log(req.file) //<------nombre de archivo
        console.log(req.body) //<--- demas datos 
        const datos = {
            producto: req.body.producto,
            precio: req.body.precio,
            imagen: req.file.originalname
        }
        const respuesta = await modelo.crearUno(datos)// 
        ///
        res.status(201).json({mensaje: 'Registro creado'})
    })
}
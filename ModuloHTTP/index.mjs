// Modulo http
import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'


const app = http.createServer(async (peticion, respuesta) => {
    console.log(peticion.method)
    if (peticion.method === 'GET') {
        if (peticion.url === '/') {
            respuesta.statusCode = 200
            return respuesta.end(`
                Ruta raiz...
                `)
        }
        if (peticion.url === '/usuarios') {
            respuesta.statusCode = 200
            return respuesta.end(`
                Ruta usuarios...
                `)
        }
    }
    if (peticion.method === 'POST') {
        if (peticion.url === '/') {

            const ruta ='./contenido.txt'
            await fsp.writeFile(ruta, 'contenido fake')

            return respuesta.end(`Recurso creado`)
        }
    
    respuesta.statusCode = 404
    return respuesta.end('No se encontro la ruta')
    }
})

app.listen(3000, () => {
    console.log(`servidor escuchando en http://localhost:3000`)
})

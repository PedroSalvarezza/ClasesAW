import fsp from 'node:fs/promises'
import path from 'node:path'

const ruta = path.join('./datosApiA2.json')

export async function writeJSON(data) {
    try{
        await fsp.writeFile(ruta, JSON.stringify(data, null, 4))
        console.log('\x1b[32m Datos guardados! \x1b[0m')
    }catch(e){
        throw new Error("\x1b[31m Error en la funcion writeJSON \x1b[0m", { cause: e });
    }
}

export async function readJSON() {
    try{
        const datos = await fsp.readFile(ruta, 'utf-8')
        return JSON.parse(datos)
    }
    catch(e){
        throw new Error("\x1b[31m Error en la funcion readJSON \x1b[0m", { cause: e });
    }
}
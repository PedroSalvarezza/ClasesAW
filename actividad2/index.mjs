import { getUsers } from './recursos/escribirArchivos.mjs'
import { writeJSON, readJSON } from './recursos/lecturaApi.mjs'

try{
    const usuarios = await getUsers()
    await writeJSON(usuarios)
    const datos = await readJSON()
    console.log(datos)
}
catch(e){
    throw new Error("\x1b[31m Error en la exportacion \x1b[0m", { cause: e });
}
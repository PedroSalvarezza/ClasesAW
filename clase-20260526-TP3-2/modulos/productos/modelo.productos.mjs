import pool from '../../bd/conexion.bd.mjs'

export async function obtenerTodos(){
    const resultado = await pool.query('SELECT * FROM productos') //<--- promesa
    return resultado
}


// POST
export async function crearUno(datos){
    const {producto, precio, imagen} = datos //<--- asignacion desestructurante
      const resultado = await pool.query(`
        INSERT INTO 
        productos(producto, precio) 
        VALUES($1, $2) 
        RETURNING id, producto, precio`,
        [producto, precio, imagen]) //<--- promesa
    return resultado
}
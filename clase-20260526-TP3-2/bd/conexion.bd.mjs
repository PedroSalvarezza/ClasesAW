import pg from 'pg'

// Clase Pool -> hacer consultas simples

const pool = new pg.Pool({
    host: process.env.BD_HOST || 'localhost',
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_BD,
    port: process.env.BD_PORT
})
// Exportamos para hacerlo vicible desde otro modulo
// default es no nombrado -> se importa in las llaves
export default pool
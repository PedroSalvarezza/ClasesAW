import express from 'express'
console.log('Servidor andando')
const PUERTO = 3000

const app = express()

async function validarCodigo(req, res, next) {
    const codigoParam = req.params.codigo

    const respuesta = await fetch('http://localhost:4321/usuario')
    const { codigo } = await respuesta.json()

    if (Number(codigoParam) === codigo) {
        next()
    } else {
        res.status(400).json({ mensaje: 'El código es incorrecto' })
    }
}

app.get('/:codigo', validarCodigo, (req, res) => {
    res.status(200).json({ mensaje: 'El código es correcto' })
})

app.listen(PUERTO)
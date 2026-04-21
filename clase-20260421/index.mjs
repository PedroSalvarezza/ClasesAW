// ExpressJS
// Conectarse a otro ip http://192.169.0.129:3000/forlan
import express from 'express'

const puerto = 3000


const app = express()

app.get('/', (req, res)=>{
    res.status(200)
    res.send (`Estas en mi raiz`)
})

app.get('/saludo', (req, res) => {
    res.status(200)
    res.set('content-type','text:html')
    res.send(`<h1> Hola que tal </h1>`)
})

app.post('/', (req, res)=>{
    res.status(201)
    res.send('POST en mi raiz')
})

app.post('/saludo', (req, res)=>{
    res.status(200)
    res.send('Hola esto es un POST en mi servidor')
})

app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`)
})
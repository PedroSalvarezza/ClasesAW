// ExpressJS
// Conectarse a otro ip http://192.169.0.129:3000/forlan
import express from 'express'

const puerto = 3000


const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const productos = [
{
    id: 1,
    nombre: "camiseta",
    precio: 200000
},
{
    id: 2,
    nombre: "pantalon",
    precio: 200000
}
]

app.get('/', (req, res)=>{
    res.status(200)
    res.send (`Estas en mi raiz`)
})

app.get('/productos', (req, res) => {
    res.json(productos)
    //res.status(200)
    //res.set('content-type','application/json')
    //res.send(`{"Materia" : "AW2"}`)
})
app.get('/productos/:id', (req, res) => {
    
    const id = parseInt(req.params.id)
    console.log(id)    

    const resultado = productos.filter(p => p.id === id)

    if (resultado.length === 0) {
        return res.status(404).json({ mensaje: "Producto no encontrado" })
    }

    res.json(resultado)
})

app.post('/productos', (req, res)=>{
    const cuerpo = req.body
    productos.push(cuerpo)
    res.status(201).json({mensaje: "Producto cargado"})
})

app.get('/usuarios', (req, res) => {
    res.status(200)
    res.set('content-type','application/json')
    res.send(`{"Materia" : "AW2"}`)
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
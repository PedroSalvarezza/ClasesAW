import express from 'express'

const puerto = 3000

const app = express()


function middleware1(req, res, next){
    console.log('middleware1')
    next()
}

app.use('/saludo',middleware1)

app.get('/', (req, res)=>{
    console.log('otro ejecutete')
    res.send (`Estas en mi raiz`)
})  
app.get('/saludo', (req, res)=>{
    console.log('otro ejecutete saludando')
    res.send (`Ello`)
}) 

app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`)
})
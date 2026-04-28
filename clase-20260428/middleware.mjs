import express from 'express'

const puerto = 3000

const app = express()


function middleware1(req, res, next){
    const usuarioExiste = false
    
    if(usuarioExiste){
        console.log('user found')
        next()
    }else{
        console.log('user not found')
        res.send('no user')
    }
}

app.get('/',middleware1, (req, res)=>{
    console.log('otro ejecutete')
    res.send (`Estas en mi raiz`)
})  

app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`)
})
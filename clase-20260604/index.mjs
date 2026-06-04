import express from 'express'
import cookieParser from 'cookie-parser'

const PUERTO = 3000


const app = express()

app.use(cookieParser('misecreto'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/login', express.static('./fronts/front-login'))
function chequearAcceso(req, res, next){
    
    const miidentificador = req.signedCookies['sesion']
    if(miidentificador === 'identificador'){
        return next()
    }
    return res.redirect('/login')
}
app.use('/admin', chequearAcceso, express.static('./fronts/front-admin'))

app.post('/autenticar', (req, res)=>{
    const {usuario, clave} = req.body
    if(usuario != 'pit' || clave != 'pitson'){
        return res.redirect('/login')
    }
    res.cookie('sesion','identificador',{
        secure:true,
        httpOnly: true,
        sameSite: 'lax',
        signed: true,
        maxAge: 1000 * 10
    })
    res.redirect('/admin')
    // res.json({
    //     mensaje: 'Usuario logeado'
    // })

})














app.listen(PUERTO)
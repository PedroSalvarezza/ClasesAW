export async function getUsers() {
    try{
        const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
        const productos = await respuesta.json()
    
        return productos.map((user) => ({
            id: user.id,
            email: user.email,
            name: user.name,
        }))
    }catch(e){
        throw new Error("\x1b[31m Error en la funcion map \x1b[0m", { cause: e });
    }
}
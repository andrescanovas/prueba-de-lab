const http = require('http')

http.createServer( (peticion,respuesta) => {


    console.log(peticion)

    respuesta.writeHead(200,{'Content-type': 'text/plain'})

    const persona = {
        id : 1,
        nombre : 'andres canoooovas',
        direccion :'sup 1520'
    }


    respuesta.write(JSON.stringify(persona))
    respuesta.end()


})

.listen(8080)

console.log('Escuchando en puerto ',8080)

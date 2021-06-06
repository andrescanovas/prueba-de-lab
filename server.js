const express = require('express');
const hbs = require('hbs');
const app = express();

// Lo de abajo es una Variable de entorno 
const port = process.env.PORT || 3000

// Lo de abajo permite conectar con los archivos html seria el Middware

app.use( express.static('public'))

// TODO requiere de (hbs)

app.set('view engine', 'hbs') 

/*TODO PARCIALES */

hbs.registerPartials( __dirname + '/views/parciales')

// El sendFile es para llamar al archivo html

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html')

  // app.get('/generic', function (req, res) {
  //   res.sendFile(__dirname + '/public/generic.html')
  // })

  // app.get('/elements', function (req, res) {
  //   res.sendFile(__dirname + '/public/elements.html')
  // })
//   })

app.get('/', function (req, res) {
  res.render('home',{
    titulo: 'Trabajando con hbs',
    titulo2:'Bienvenido al Blog de: ',
    nombre: 'Andres Canovas'
  })
})


app.get('/elements', function (req, res) {
  res.render('elements',{
    titulo: 'Trabajando con hbs',
    titulo2:'Bienvenido al Blog de: ',
    nombre: 'Andres Canovas'
  })
})


app.get('/comunidad', function (req, res) {
  res.render('comunidad',{
    titulo: 'Trabajando con hbs',
    titulo2:'Bienvenido al Blog de: ',
    nombre: 'Andres Canovas'
  })
})






app.listen(port, ()=>{

  console.log(`Escuchando el servidor en el puerto http://localhost: ${port}`)

})


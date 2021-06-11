const apikey = '3jeDJgKWRczg94GcVIK7f1g3A7XDIkk5'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?apikey=${apikey}`)

peticion
.then(respuesta => respuesta.json())
.then( ({data}) =>{
    
    
    
    const {url}= data.images.original
    const img = document.createElement('img')
    img.src = url

    document.body.append(img)
    
})
.catch( console.warn )
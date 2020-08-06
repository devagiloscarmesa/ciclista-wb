class Comentario{
    
    obtenerComentarios(){
        fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        .then(function(respuesta){
            respuesta.json()
            .then(function(data){
                console.log(data);
            })
        });
    }
}
export default Comentario;

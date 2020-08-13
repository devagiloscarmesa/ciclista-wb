class Comentario{
    
    obtenerComentarios(){
        fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories', {
            method: 'GET'
        })
        .then(function(respuesta){
            console.log();
            if(respuesta.status === 200){
                respuesta.json().then((data) => {
                    console.log(data.categories);
                });
            }else{
                alert("Error en el servidor!!!");
            }

        })
        .catch( (response) => {
            console.log('Desde catch ',response);
        });
    }
}
export default Comentario;

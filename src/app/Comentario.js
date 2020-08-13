class Comentario{
    
    async obtenerComentarios(){
        try{
            let respuesta = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories', {method: 'GET'});
            if(respuesta.status === 200){
                let data = await respuesta.json();
                let categories = data.categories;
                return categories;
            }else{
                alert("Error en el servidor!!!");
            }
        }catch(e){
            
        }
        /*fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories', {
            method: 'GET'
        })
        .then(function(respuesta){
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
        });*/
    }
}
export default Comentario;

import Comentario from './Comentario';
import Corredor from './poo/Corredor.js'
import RegistroTiempo from './poo/RegistroTiempo'
import $ from 'jquery'
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all'
import './sass/_custom.scss';

const CORREDORES = [];
async function main(){
    const com = new Comentario();
    let categorias = await com.obtenerComentarios();
    let html = '';
    categorias.forEach(categorie => { 
        html += `<tr>
                    <td>${categorie.id}</td>
                    <td>${categorie.title}</td>
                    <td>${categorie.description}</td>
                    <td><a href = "${categorie.layers}">Link Endpoint</a></td>
                    <td><iframe width="300" height="200" src = "${categorie.link}"></iframe></td>
                </tr>`;
    });
    document.querySelector("#nasa_categories tbody").innerHTML = html;
    
}

//main();

document.querySelector('#modal-registro .modal-footer #btn-guardar-registro-ciclista').addEventListener('click', 
	e => {
        if(document.querySelector("#frm-registro-ciclista").reportValidity()){
            let t1 = document.querySelector("#tiempo1").value;
            let t2 = document.querySelector("#tiempo2").value;
            let t3 = document.querySelector("#tiempo3").value;
            let t4 = document.querySelector("#tiempo4").value;
            let t5 = document.querySelector("#tiempo5").value;
            let regTiempo = new RegistroTiempo(t1, t2, t3, t4, t5);
            
            let corredor = new Corredor();
            corredor.nombre = document.querySelector("#nombre-corredor").value;
            corredor.registroDeMisTiempos = regTiempo;
            
            CORREDORES.push(corredor);
            alert("Registro agregado exitosamente");
            $("#modal-registro").modal('toggle');
        }
} )
  
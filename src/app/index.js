import Comentario from './Comentario';
import 'bootstrap';
import './sass/_custom.scss';


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

main();
  
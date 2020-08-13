import Comentario from './Comentario';
import 'bootstrap';
import './sass/_custom.scss';
const com = new Comentario();
let categorias = com.obtenerComentarios();

console.log(categorias);
  
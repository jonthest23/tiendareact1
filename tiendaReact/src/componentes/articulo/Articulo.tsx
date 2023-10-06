import { Articulo as ArticuloI } from '../../interface/interfaces'
import './articulo.css'
interface propsArticulo {
    articulo: ArticuloI
    articuloDetalle : Function

  }
  
  export default function Articulo(props: propsArticulo) {
    function mostrarDetalle(){
      props.articuloDetalle(props.articulo)
    }

    return (
      <div className='contenedorArticulo' onClick={mostrarDetalle}>
        <div className='contenedorImagen'>
        <img src={props.articulo.image} alt={props.articulo.title} className='imagenArticulo'/>
        </div>
        <h1>
          {props.articulo.title}
        </h1>
        <div className='cajaTexto'>
            <p>
            {props.articulo.description}
            </p>
        </div>
        <p>{props.articulo.price}</p>
        
      </div>
    )
  }
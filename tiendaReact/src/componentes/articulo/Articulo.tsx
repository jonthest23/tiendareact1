import { Articulo as ArticuloI } from '../../interface/interfaces'
import './articulo.css'
interface propsArticulo {
    articulo: ArticuloI
  }
  
  export default function Articulo(props: propsArticulo) {
    return (
      <div className='contenedorArticulo'>
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
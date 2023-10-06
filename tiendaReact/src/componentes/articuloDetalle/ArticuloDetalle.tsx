import fakeStoreApi from "../../conexion/fakeStoreApi";
import { Articulo } from "../../interface/interfaces";
import './articuloDetalle.css'
interface props {
    articulo: Articulo | undefined
    activo: boolean
    esconderDetalle: Function
}

export default function ArticuloDetalle(props: props) {

    const conexion = new fakeStoreApi()

    function cerrarDetalle() {
        props.esconderDetalle()
    }

    function borrarArticulo() {
        if (props.articulo !== undefined) {
        conexion.eliminarArticulo(props.articulo.id)
        }
    }
    if (props.articulo === undefined) {
        return null
    }else

    if (props.activo) {
        return (
            <div id="fondoDetalleArticulo">
                <div id="popupDetalleArticulo">

                    <div id="contenedorImg">
                        <img src={props.articulo.image} alt={props.articulo.title} />
                    </div>
                    <div id="contenedorInformacion">
                        <h1>Detalle del articulo</h1>
                        <h2>{props.articulo.title}</h2>
                        <p>{props.articulo.description}</p>
                        <p>{props.articulo.price}</p>
                        <p>{props.articulo.category}</p>
                        <button onClick={borrarArticulo}>Borrar</button>
                        <button onClick={cerrarDetalle}>Cerrar</button>
                    </div>

                    
                </div>
            </div>
        )


    } else {
        return null
    }
}
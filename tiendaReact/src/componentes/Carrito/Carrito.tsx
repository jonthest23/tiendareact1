import { carrito } from "../../interface/interfaces"
import './carrito.css'
interface propsCarrito{
    carrito: carrito
    abrirDetalle: Function
}

export default function Carrito(props: propsCarrito){ 

    function abrirDetalle(){
        props.abrirDetalle(props.carrito)
    }
    return(
        <div className='contenedorCarrito'>
            <h1>carrito #{props.carrito.id}</h1>
            <p>{(() => {
                let fecha = new Date(props.carrito.date);
                const options: Intl.DateTimeFormatOptions = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  };
                return fecha.toLocaleDateString('es-ES', options);
            })()}</p>


            <button onClick={abrirDetalle}>
                ver detalle
            </button>
        </div>
    )
}

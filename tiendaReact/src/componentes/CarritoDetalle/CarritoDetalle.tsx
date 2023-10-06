import { carrito } from "../../interface/interfaces";
import fakeStoreApi from "../../conexion/fakeStoreApi";
import './carritoDetalle.css'
import { useEffect, useState } from "react";
interface props {
  carrito: carrito | null;
  esconderDetalle: Function;
}


export default function CarritoDetalle(props: props) {

    const conexion = new fakeStoreApi();
    const [nomreUsuario, setNomreUsuario] = useState("")

    const nombreUsuario = async () => {
        if (props.carrito === null) {
            
        } else {
            try {
                const respuesta = await conexion.obtenerUsuario(props.carrito.userId)
                if (respuesta){
                    setNomreUsuario(respuesta.name.firstname + " " + respuesta.name.lastname)
                }else{
                    setNomreUsuario("...")
                }
                
            } catch (error) {
                console.error(error)
            }
        }
    }
useEffect(() => {
    nombreUsuario()
},[props.carrito])
    



  if (props === undefined) {
    return null;
  }else if(props.carrito === null){
    return null;
  }
    else {
    return (
      <div id="fondoDetalleCarrito">
        <div id="popupDetalleCarrito">
          <div id="contenedorInf">
            <h1>Usuario</h1>
            <h2>{props.carrito.userId}</h2>
            <h2>{nomreUsuario}</h2>
            <button onClick={() => props.esconderDetalle()}>Cerrar</button> {/*tocaba que fuera arrow function =) -colapsa*/}
          </div>
          <div id="contenedorArticulos">
            <h1>Articulos</h1>
            {props.carrito.products.map((articulo) => {
                return (
                    <li key={articulo.productId}>
                        <div className="articuloCarrito">
                            <h2>{articulo.productId}</h2>
                            <h2>{articulo.quantity}</h2>
                        </div>
                    </li>
                );
            })}
            
          </div>
        </div>
      </div>
    );
  } 
}








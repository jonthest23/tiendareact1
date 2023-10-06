import { carrito } from "../../interface/interfaces";
import fakeStoreApi from "../../conexion/fakeStoreApi";
import { useState } from "react";
import { useEffect } from "react";
import  ErrorServicio  from "../../componentes/errors/errores";
import Carrito from "../../componentes/Carrito/Carrito";
import Cargando from "../../componentes/Cargando/Cargando";
import CarritoDetalle from "../../componentes/CarritoDetalle/CarritoDetalle";
import './carritos.css';


export default function CarritosLayout() {

    const conexion = new fakeStoreApi();
    const [carritos, setCarritos] = useState<carrito[]>([]);
    const [cargando, setCargando] = useState(false);
    const [errorServicio, setErrorServicio] = useState(false);
    const [carritoSeleccionado, setCarritoSeleccionado] = useState<carrito | null>(null);
    

    const obtenerCarritos = async (): Promise<void> => {
        try {
            const respuesta = await conexion.obtenerCarritos();
            if (respuesta) {
                setCarritos(respuesta);
                setCargando(false);
            } else {
                setErrorServicio(true);
                setCargando(false);
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    function mostrarDetalle(carrito: carrito) {
        setCarritoSeleccionado(carrito);
    }
    function esconderDetalle() {
        setCarritoSeleccionado(null);
    }

    useEffect(() => {
        setCargando(true);
        obtenerCarritos();
    }, []);

    if (cargando) {
        return (
            <Cargando/>
        )
    }
    else if (errorServicio) {
        return (
            <ErrorServicio/>
        )
    }else{
        return (
            <section id="contenedorCarritos">
                <ul>
                    {carritos.map((carrito) => {
                        return (
                            
                            <li key={carrito.id}>
                                <Carrito carrito={carrito} abrirDetalle={mostrarDetalle} />
                            </li>
                            
                        );
                    })}
                </ul>
                <CarritoDetalle carrito={carritoSeleccionado}  esconderDetalle={esconderDetalle} />
            </section>
            
        )
    }
}




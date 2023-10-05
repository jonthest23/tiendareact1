import { carrito } from "../../interface/interfaces";
import fakeStoreApi from "../../conexion/fakeStoreApi";
import { useState } from "react";
import { useEffect } from "react";
import  ErrorServicio  from "../../componentes/errors/errores";
import Carrito from "../../componentes/Carrito/Carrito";
import Cargando from "../../componentes/Cargando/Cargando";
import './carritos.css';


export default function CarritosLayout() {

    const conexion = new fakeStoreApi();
    const [carritos, setCarritos] = useState<carrito[]>([]);
    const [cargando, setCargando] = useState(false);
    const [errorServicio, setErrorServicio] = useState(false);

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
                                <Carrito carrito={carrito} />
                            </li>
                        );
                    })}
                </ul>
            </section>
        )
    }
}




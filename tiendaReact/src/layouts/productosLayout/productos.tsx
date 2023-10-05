import fakeStoreApi from "../../conexion/fakeStoreApi";
import { useState } from "react";
import { useEffect } from 'react';
import  ErrorServicio  from '../../componentes/errors/errores';
import  Articulo from "../../componentes/articulo/Articulo";
import { Articulo  as ArticuloI } from "../../interface/interfaces";
import './productos.css'

export default function ProductosLayout() {

  const conexion = new fakeStoreApi()
  const [articulos, setArticulos] = useState<ArticuloI[]>([])
  const [errorServicio, setErrorServicio] = useState(false)

  
   const getProducts = async () => {
    try {
      const respuesta = await conexion.obtenerArticulos()
      setArticulos(respuesta)
    } catch (error) {
      console.error(error)
      setErrorServicio(true)
    }
    
  }
  useEffect(() => {
    getProducts()
  })

  if (errorServicio) {
    return <ErrorServicio/>
  }else{
    return (
    <section id = "contenedorArticulos">
      <ul>
        {articulos.map(articulo => {
          return (
            
              <li key={articulo.id}>
                <Articulo articulo={articulo} />
              </li>
            
          )
        })}
      </ul>
    </section>


    )
  }
        
  
}



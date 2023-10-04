import { Articulo } from '../interface/interface'
import fakeStoreApi from "../conexion/fakeStoreApi";
import { useState } from "react";
import { useEffect } from 'react';
export default function Productos() {

  const conexion = new fakeStoreApi()
  const [articulos, setArticulos] = useState<Articulo[]>([])
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
  }, [])

  if (errorServicio) {
    return <ErrorServicio/>
  }else{
    return (
    <section id = "contenedorArticulos">
      <ul>
        {articulos.map(articulo => {
          return (
            
              <li key={articulo.id}>
                <Articulos articulo={articulo} />
              </li>
            
          )
        })}
      </ul>
    </section>


    )
  }
        
  
}

export function ErrorServicio() {
  return (
    <section >
      <h1>error de servicio</h1>
    </section>
  )
} 

interface propsArticulo {
  articulo: Articulo
}

export function Articulos(props: propsArticulo) {
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
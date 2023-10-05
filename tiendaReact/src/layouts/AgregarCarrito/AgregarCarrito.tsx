import React, { useState } from "react";
import fakeStoreApi from "../../conexion/fakeStoreApi";
import {carrito} from "../../interface/interfaces";
import "./agregarCarrito.css";

interface inputArticulo {
    productoId: string;
    cantidad: string;
}


function AgregarCarritoLayout() {
  const [inputs, setInputs] = useState<inputArticulo[]>([{
    productoId: "",
    cantidad: "",
  }]);

  const handleInputChange = (index: number, value: string, cantidad : string) => {
    const newInputs = [...inputs];
    newInputs[index] = 
        {
            productoId: value,
            cantidad: cantidad
        };
    setInputs(newInputs);
    if (index === inputs.length - 1 && value !== "" && cantidad !== ""){
        newInputs.push({productoId: "", cantidad: ""});
        setInputs(newInputs);
    }
    if(value == "" && cantidad == "" && index !== 0){
        newInputs.splice(index, 1);
        setInputs(newInputs);
    }

  };

  const conexion = new fakeStoreApi();

  function enviarCarrito(carrito: carrito){
    try{
        conexion.agregarCarrito(carrito);
    }catch(error){
        alert("error al agregar carrito");
        console.log(error);
    }
  }

  function formularioCarrito(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; 
    const usuarioId = form.usuarioId.value;
    const carrito: carrito = {
      id: 0,
      userId: usuarioId,
      date: "",
      products: inputs.slice(0, inputs.length - 1).map((input) => ({
        productId: parseInt(input.productoId),
        quantity: parseInt(input.cantidad),
      })),
    };
    enviarCarrito(carrito);
  }

  return (
    
    <div>
        <h1 id="titulo">Agregar Carrito</h1>
        <form id="formularioCarrito" onSubmit={formularioCarrito}>
            <input id = "usuarioId" placeholder="usuarioId"/>
            {inputs.map((input, index) => (
              <div className="inputArticulo" key= {index}>
                <input
                
                placeholder="productoId"
                value={input.productoId}
                name={`inputProductoId-${index}`}
                onChange={(e) => handleInputChange(index, e.target.value, input.cantidad)}
                />
                <input
                
                placeholder="cantidad"
                value={input.cantidad}
                name={`inputCantidad-${index}`}
                onChange={(e) => handleInputChange(index, input.productoId, e.target.value)}
                />
              </div>
            ))}
            <button type="submit">Agregar</button>
        </form>
      

    </div>
  );
}

export default AgregarCarritoLayout;


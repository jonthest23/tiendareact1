import {carrito} from "../../interface/interfaces"
import fakeStoreApi from "../../conexion/fakeStoreApi"
import { useState } from "react"
import './agregarCarrito.css'

export default function AgregarCarritoLayout() {
    const [inputs, setInputs] = useState<number[]>([
    ]);

    const handleInputChange = (index: number, value: number) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
        if (value !== undefined && index === inputs.length - 1) {
            setInputs([...inputs]);
        }
    };

    return (
        <>
            {inputs.map((input: number, index : number) => (
                <input
                    key={index}
                    type="number"
                    value={input}
                    onChange={(e) => handleInputChange(index, +e.target.value)}
                />  
            ))}
        </>
    )
}


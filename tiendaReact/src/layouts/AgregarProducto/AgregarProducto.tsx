import {Articulo} from "../../interface/interfaces"
import fakeStoreApi from "../../conexion/fakeStoreApi"
import './agregarProducto.css'

export default function AgregarProductoLayout() {
    const conexion = new fakeStoreApi()

    function agregarProducto(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const form = e.currentTarget
        const nombre = form.nombre.value
        const descripcion = form.descripcion.value
        const precio = form.precio.value
        const imagen = form.imagen.value
        const categoria = form.categoria.value
        const articulo: Articulo = {
            id: 0, // no importa el id,se agrega para que no de error
            title: nombre,
            description: descripcion,
            image: imagen,
            category: categoria,
            price: precio,
        }
        conexion.enviarArticulo(articulo)
    }

    return(
        <div>
            <h1 id="titulo">Agregar Producto</h1>
            <form onSubmit={agregarProducto} id="formularioProducto">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" />
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" name="descripcion" id="descripcion" />
                <label htmlFor="precio">Precio</label>
                <input type="number" name="precio" id="precio" />
                <label htmlFor="imagen">Imagen</label>
                <input type="text" name="imagen" id="imagen" />
                <label htmlFor="categoria">Categoria</label>
                <input type="text" name="categoria" id="categoria" />
                <button type="submit">Agregar</button>
            </form>
        </div>
    )

    
}
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CarritosLayout from './layouts/CarritoLayout/carritos'
import ProductosLayout from './layouts/productosLayout/productos'
import AgregarProductoLayout from './layouts/AgregarProducto/AgregarProducto'
import AgregarcarritoLayout from './layouts/AgregarCarrito/agregarCarrito'
import './App.css'

function App() {


  return (
    <>
    <Router>
      <header>
        <h1>Tienda en React</h1>
      </header>
      <main>
        <nav className='navegacionPrincipal'>
          <ul>
            <li><a href="/producto">Producto</a></li>
            <li><a href="/carrito">Carrito</a></li>
            <li><a href='/anadirProducto'>Añadir producto</a></li>
            <li><a href='/anadirCarrito'>Añadir carrito</a></li>
            
          </ul>
        </nav>  

        
        <Routes>
          <Route path="/">
            
          </Route>
          <Route path='/anadirProducto' element = {<AgregarProductoLayout/>}/>
          <Route path="/producto" element= {<ProductosLayout/>} />
          <Route path="/carrito" element={<CarritosLayout/>} />
          <Route path="/anadirCarrito" element={<AgregarcarritoLayout/>} />
          
        </Routes>
        
        
      </main>
      <footer>
        <p>desarrollo Jonathan Mora  55821506</p>
      </footer>
      </Router>
    </>
  )
}

export default App

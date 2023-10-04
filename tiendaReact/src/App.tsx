import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Productos from './layouts/productos'
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
            <li><a href='/añadirCarrito'>Añadir carrito</a></li>
            <li><a href='/añadirProducto'></a>Añadir producto</li>
          </ul>
        </nav>  

        
        <Routes>
          <Route path="/">
            
          </Route>
          <Route path="/producto" element= {<Productos/>}>
          </Route>
          <Route path="/contact">
            
          </Route>
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

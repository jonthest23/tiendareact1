import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>  

        <section>
        <Routes>
          <Route exact path="/">
            
          </Route>
          <Route path="/about">
            
          </Route>
          <Route path="/contact">
            
          </Route>
        </Routes>
        </section>
        
      </main>
      <footer>
        <p>desarrollo Jonathan Mora  55821506</p>
      </footer>
      </Router>
    </>
  )
}

export default App

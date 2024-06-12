import { useState } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'
import { UsuariosContextProvider } from './contexts/GlobalContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UsuariosContextProvider>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </UsuariosContextProvider>
  )
}

export default App
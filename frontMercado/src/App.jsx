import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Footer/>
    </>
  )
}

export default App

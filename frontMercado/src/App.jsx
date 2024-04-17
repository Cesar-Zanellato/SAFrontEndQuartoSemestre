import { useState } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
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

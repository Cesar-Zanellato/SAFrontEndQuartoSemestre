import React from 'react'
import './Home.css'
import CardProduto from '../../components/CardProduto/CardProduto.jsx'
function Home() {




  return (
    <>
      <div className='divCarrossel'>

        <img src="carrossel.png" alt="" />

      </div>

      <h1 className='textMaisVendidos'>Mais Vendidos</h1>

      <div className='divForaMaisVendidos'>
        
        <div className='divDentroMaisVendidos'>

         <CardProduto></CardProduto>

          <div className='divProduto'>

          </div>

          <div className='divProduto'>

          </div>

          <div className='divProduto'>

          </div>

          <div className='divProduto'>

          </div>

          

        </div>

      </div>
    </>


    
  )
}

export default Home

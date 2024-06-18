import React from 'react'
import './Home.css'
function Home() {


  return (
    <>
      <div className='divCarrossel'>

        <img src="carrossel.png" alt="" />

      </div>

      <h1 className='textMaisVendidos'>Mais Vendidos</h1>

      <div className='divForaMaisVendidos'>
        
        <div className='divDentroMaisVendidos'>

          <div className='divProduto'>

              <div className='divImgProduto'>

                  <img className='imgCocaCola' src="coca_cola.png" alt="" />

              </div>

              <div className='divTituloProduto'>

                <p className='tituloProduto'>Refrigerante Coca-Cola 2L</p>

              </div>

              <div className='divCompraProduto'>
                <p className='textValor'>9,99</p>
                  <div className='divQuantidade'>

                    <div className='botaoMais'>

                    </div>

                    <div className='botaoMenos'>
                      
                    </div>

                  </div>

                  <div className='divAdicionar'>
                    <p className='textAdicionar'>Adicionar</p>
                  </div>
              </div>
            
          </div>

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

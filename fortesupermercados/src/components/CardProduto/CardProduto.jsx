import './CardProduto.css'
import { useState, useEffect } from 'react';

import api from '../../api/api';
function CardProduto() {


    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        try {
            api.get("/categories/1/products").then(response => {
                setProdutos(response.data);
                console.log(produtos)
            });

        } catch (error) {
            console.error("Error:", error);
        }

    }, []);

    return (
        <>
            {
                produtos.map((product) => (

                    <div key={product.id} className='divProduto' >

                        

                        <div className='divImgProduto'>

                            <div className='divImgProdutoDiv'>
                                <img className='imgCocaCola' src={`ALIMENTOS_BASICOS/${product.image}`} alt="" />
                            </div>

                        </div>

                        

                        <div className='divTituloProduto'>

                            <p className='tituloProduto' >{product.name}</p>

                        </div>

                        <div className='divCompraProduto'>
                            <p className='textValor'>{product.valueSale}</p>
                            <div className='divQuantidade'>

                                <div className='botaoMais'>

                                </div>

                                <div className='divNumQuantidade'>

                                </div>

                                <div className='botaoMenos'>

                                </div>

                            </div>

                            <div className='divAdicionar'>
                                <p className='textAdicionar'>Adicionar</p>
                            </div>
                        </div>

                    </div>

                ))
            }
        </>
    )


}

export default CardProduto;



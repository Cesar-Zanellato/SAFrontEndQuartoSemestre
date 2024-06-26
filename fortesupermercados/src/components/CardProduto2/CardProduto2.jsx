import './CardProduto2.css'
import { useState, useEffect } from 'react';

import api from '../../api/api';
function CardProduto2() {


    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        try {
            api.get("/categories/3/products").then(response => {
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
                                <img className='imgCocaCola' src={`/ALIMENTOS_BASICOS/${product.image}.png`} alt={`${product.name}`} />
                            </div>

                        </div>

                        

                        <div className='divTituloProduto'>

                            <p className='tituloProduto' >{product.name}</p>

                        </div>

                        <div className='divCompraProduto'>
                            <p className='textValor'>{product.valueSale}</p>
                            

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

export default CardProduto2;



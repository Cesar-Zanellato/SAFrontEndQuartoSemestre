import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="topFooter">

      </div>

      <div className="titulos">
        <h2 className='tituloHorario'>Horário de Atendimento</h2>
        <h2 className='tituloLocalização'>Fale Conosco</h2>
        <h2 className='tituloEndereço'>Endereço</h2> 
      </div>

      <div className='subTitulo'>
        <h2 className='subMercado'>Mercado</h2>
        <h2 className='subDelivery'>Delivery</h2>
      </div>

      <div className='divTextos'> 

        <div className='divHoraMercado'>

          <div className='divSegSab'>
          <img className='relogio' src="./public/relogio.png" alt="Relegio" />
            <p className='textSegSab'>Segunda a Sábado | 07:00 até 23:00 </p>
          </div>

          <div className='divDom'>
            <img className='relogio' src="./public/relogio.png" alt="Relegio" />
            <p className='textSegSab'>Domingo | 08:00 até 23:00  </p>
          </div>

        </div>

        <div className='divHoraDelivery'>

        <div className='divSegSab'>
          <img className='relogio' src="./public/relogio.png" alt="Relegio" />
            <p className='textSegSab'>Segunda a Sábado | 08:00 até 22:00  </p>
          </div>

          <div className='divDom'>
            <img className='relogio' src="./public/relogio.png" alt="Relegio" />
            <p className='textSegSab'>Domingo | 09:00 até 21:00  </p>
          </div>

        </div>

        <div className='divFaleConosco'>
          <div className='divSegSab'>
          <img className='telefone' src="./public/telefone.png" alt="Relegio" />
            <p className='textSegSab'>(48) 3284-5827 Matriz </p>
          </div>

          <div className='divDom'>
            <img className='email' src="./public/email.png" alt="Relegio" />
            <p className='textSegSab'>contato@fortesupermercados.com.br  </p>
          </div>
        </div>

        <div className='divEndereço'>
        <div className='divTextEndereço'>
          <img className='telefone' src="./public/telefone.png" alt="Relegio" />
            <p className='textSegSab'>Rua Leonel Pereira, 99 Cachoeira do Bom Jesus,
CEP-88056-300, Florianópolis - Santa Catarina - Brasil </p>
          </div>

          <div className='divDom'>
            <img className='email' src="./public/email.png" alt="Relegio" />
            <p className='textSegSab'>contato@fortesupermercados.com.br  </p>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;

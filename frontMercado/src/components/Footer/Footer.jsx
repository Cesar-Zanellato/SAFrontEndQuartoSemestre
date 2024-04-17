import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Horário de Funcionamento: Seg - Sex, 8:00 - 18:00</p>
        <p>Contato: (00) 1234-5678</p>
        <p>Email: contato@supermarket.com</p>
      </div>
      <div className="footer-address">
        <p>Rua Exemplo, 123, Cidade - Estado</p>
      </div>
      <div className="footer-rights">
        <p>© 2024 Supermarket E-commerce. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

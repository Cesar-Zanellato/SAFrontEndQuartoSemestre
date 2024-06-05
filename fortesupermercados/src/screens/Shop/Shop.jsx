import React from 'react';
import './Shop.css';

const Shop = () => {
  return (
    <div className="profile-container">
      <div className="personal-info">
        <div className="column">
          <div className="info-item">
            <label>Nome:</label>
            <input type="text" />
          </div>
          <div className="info-item">
            <label>CPF:</label>
            <input type="text" />
          </div>
          <div className="info-item">
            <label>Senha:</label>
            <input type="password" />
          </div>
        </div>
        <div className="column">
          <div className="info-item">
            <label>Email:</label>
            <input type="text" />
          </div>
          <div className="info-item">
            <label>Telefone:</label>
            <input type="text" />
          </div>
          <div className="info-item">
            <label>Data de Nascimento:</label>
            <input type="date" />
          </div>
        </div>
        <div className="buttons">
          <button className="edit-button">Editar</button>
          <button className="save-button">Salvar</button>
        </div>
      </div>

      <div className="address-info">
        <div className="info-item">
          <label>Nome da Rua:</label>
          <input type="text" />
        </div>
        <div className="info-item">
          <label>Número:</label>
          <input type="text" />
        </div>
        <div className="info-item">
          <label>CEP:</label>
          <input type="text" />
        </div>
        <div className="info-item">
          <label>Ponto de Referência:</label>
          <input type="text" />
        </div>
        <div className="info-item">
          <label>Complemento:</label>
          <input type="text" />
        </div>
        <div className="buttons">
          <button className="edit-button">Editar</button>
          <button className="save-button">Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;

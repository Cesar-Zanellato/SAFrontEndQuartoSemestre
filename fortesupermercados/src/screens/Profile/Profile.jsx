import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import { UsuariosContext } from '../../contexts/GlobalContext';
import axios from 'axios';
import api from '../../api/api';

const Profile = () => {
  const [usuarioLogado, setUsuarioLogado] = useContext(UsuariosContext);
  const [formData, setFormData] = useState({
    name: '', email: '', cpf: '', phone: '', password: '', name_street: '', point_reference: '', complement: '', cep: ''
  });
  const [view, setView] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (usuarioLogado?.id) { 
        console.log("Buscando dados do usuário com ID:", usuarioLogado.id);
        try {
          const response = await api.get(`/users/${usuarioLogado.id}`);
          console.log("Resposta da API:", response);
          const user = response.data;
          setFormData({
            name: user.name || '',
            email: user.email || '',
            cpf: user.cpf || '',
            phone: user.phone || '',
            password: '', 
            name_street: user.name_street || '',
            point_reference: user.point_reference || '',
            complement: user.complement || '',
            cep: user.cep || ''
          });
        } catch (error) {
          console.error('Erro ao buscar usuário:', error);
        }
      } else {
        console.log("usuarioLogado ou ID não está definido.");
      }
    };

    fetchUserData();
  }, [usuarioLogado]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = async () => {
    try {
      await api.put(`/users/${usuarioLogado.id}`, formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao salvar alterações:', error);
    }
  };

  return (
    <div className="profile-container">
      <div className="tabs">
        <span className={view === 'personal' ? 'active' : ''} onClick={() => setView('personal')}>Dados Pessoais</span>
        <span className={view === 'address' ? 'active' : ''} onClick={() => setView('address')}>Endereço</span>
      </div>
      {view === 'personal' ? (
        <div className="personal-info">
          <div className="info-item">
            <label>Nome</label>
            {isEditing ? (
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            ) : (
              <span>{formData.name}</span>
            )}
          </div>
          <div className="info-item">
            <label>Email</label>
            {isEditing ? (
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            ) : (
              <span>{formData.email}</span>
            )}
          </div>
          <div className="info-item">
            <label>CPF</label>
            {isEditing ? (
              <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} />
            ) : (
              <span>{formData.cpf}</span>
            )}
          </div>
          <div className="info-item">
            <label>Telefone</label>
            {isEditing ? (
              <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
            ) : (
              <span>{formData.phone}</span>
            )}
          </div>
          <div className="info-item">
            <label>Senha</label>
            {isEditing ? (
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Digite nova senha" />
            ) : (
              <span>{'********'}</span>
            )}
          </div>
          <div className="buttons">
            <button onClick={isEditing ? saveChanges : toggleEdit}>{isEditing ? 'Salvar' : 'Editar'}</button>
          </div>
        </div>
      ) : (
        <div className="address-info">
          <div className="info-item">
            <label>Endereço</label>
            {isEditing ? (
              <input type="text" name="name_street" value={formData.name_street} onChange={handleInputChange} />
            ) : (
              <span>{formData.name_street}</span>
            )}
          </div>
          <div className="info-item">
            <label>Complemento</label>
            {isEditing ? (
              <input type="text" name="complement" value={formData.complement} onChange={handleInputChange} />
            ) : (
              <span>{formData.complement}</span>
            )}
          </div>
          <div className="info-item">
            <label>Ponto de Referência</label>
            {isEditing ? (
              <input type="text" name="point_reference" value={formData.point_reference} onChange={handleInputChange} />
            ) : (
              <span>{formData.point_reference}</span>
            )}
          </div>
          <div className="info-item">
            <label>CEP</label>
            {isEditing ? (
              <input type="text" name="cep" value={formData.cep} onChange={handleInputChange} />
            ) : (
              <span>{formData.cep}</span>
            )}
          </div>
          <div className="buttons">
            <button onClick={isEditing ? saveChanges : toggleEdit}>{isEditing ? 'Salvar' : 'Editar'}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

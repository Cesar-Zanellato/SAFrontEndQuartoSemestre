import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import { UsuariosContext } from '../../contexts/GlobalContext';
import axios from 'axios';
import api from '../../api/api';
import { Navigate, useNavigate } from 'react-router-dom';


const Profile = () => {

  const navigate = useNavigate()
  const [name_street, setName_street] = useState('');
  const [complement, setComplement] = useState('');
  const [point_reference, setPoint_reference] = useState('');
  const [cep, setCep] = useState('');

  const handleName_streetChange = (e) => {
    const formattedName_street = e.target.value.replace(/\D/g, '').slice(0, 11);
    setName_street(formattedName_street);
  };

  const handleComplementChange = (e) => {
    const formattedComplement = e.target.value.replace(/\D/g, '').slice(0, 11);
    setComplement(formattedComplement);
  };

  const handlePoint_referenceChange = (e) => {
    const formattedPoint_reference = e.target.value.replace(/\D/g, '').slice(0, 11);
    setPoint_reference(formattedPoint_reference);
  };

  const handleCepChange = (e) => {
    const formattedCep = e.target.value.replace(/\D/g, '').slice(0, 11);
    setCep(formattedCep);
  };

 

  

  const saveAddress = async () => {

    try {
      const address = { name_street, complement, point_reference, cep};
      await api.post("/address", address);
      
      
    } catch (error) {
      console.log(address)
      alert('Erro ao salvar o endereço');
    }
  }

  const [usuarioLogado, setUsuarioLogado] = useContext(UsuariosContext);
  const [formData, setFormData] = useState({
    name: '', email: '', cpf: '', phone: '', password: '', name_street: '', point_reference: '', complement: '', cep: ''
  });
  const [view, setView] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("Teste = " + usuarioLogado)
      if (usuarioLogado?.id) {
        
        try {
          const response = await api.get(`/users/${usuarioLogado.id}`);
          
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

  const excluir = async () => {
    try {
      await api.delete(`/users/${usuarioLogado.id}`);
      setIsEditing(false);
      localStorage.clear();
      navigate("/login")

    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };

  
  


  return (

    <div className="container">
      <div className="profile-container">


        <div className="tabs">
          <span className={view === 'personal' ? 'active' : ''} onClick={() => setView('personal')}>Dados Pessoais</span>
          <span className={view === 'address' ? 'active' : ''} onClick={() => setView('address')}>Endereço</span>
        </div>

        {view === 'personal' ? (

          <div className="personal-info">

            <div className='centro'>

              <div className="info-item">
                <label className='textSubtitulo'>Nome</label>
                {isEditing ? (
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                ) : (
                  <span>{formData.name}</span>
                )}
              </div>


              <div className="info-item">
                <label className='textSubtitulo'>Email</label>
                {isEditing ? (
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                ) : (
                  <span>{formData.email}</span>
                )}
              </div>


              <div className="info-item">
                <label className='textSubtitulo'>CPF</label>
                {isEditing ? (
                  <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} />
                ) : (
                  <span>{formData.cpf}</span>
                )}
              </div>


              <div className="info-item">
                <label className='textSubtitulo'>Telefone</label>
                {isEditing ? (
                  <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                ) : (
                  <span>{formData.phone}</span>
                )}
              </div>

              
              <div className="info-item">
                <label className='textSubtitulo'>Senha</label>
                {isEditing ? (
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Digite nova senha" />
                ) : (
                  <span>{'********'}</span>
                )}
              </div>
            </div>

            <div className='divBotao'>

              {isEditing ? (
                <div className="buttons">
                  <button onClick={isEditing ? saveChanges : toggleEdit}>{isEditing ? 'Salvar' : 'Editar'}</button>
                </div>
              ) : (
                <>
                  <div className="buttons">
                    <button onClick={ isEditing ? saveChanges : toggleEdit}>{isEditing ? 'Salvar' : 'Editar'}</button>
                  </div>

                  <div className="buttons">
                    <button onClick={excluir}>Excluir</button>
                  </div>
                </>

              )}





            </div>

          </div>
        ) : (
          <div className="address-info">

            <div className="info-item">
              <label className='textSubtitulo'>Endereço</label>
              {isEditing ? (
                <input 
                type="text" 
                name="name_street" 
                value={name_street} 
                onChange={(e) => setName_street(e.target.value)} />
              ) : (
                <span>{formData.name_street}</span>
              )}
            </div>


            <div className="info-item">
              <label className='textSubtitulo'>Complemento</label>
              {isEditing ? (
                <input 
                type="text"
                name="complement" 
                value={complement} 
                onChange={ (e) => setComplement(e.target.value)} />
              ) : (
                <span>{formData.complement}</span>
              )}
            </div>


            <div className="info-item">
              <label className='textSubtitulo'>Ponto de Referência</label>
              {isEditing ? (
                <input 
                type="text" 
                name="point_reference" 
                value={point_reference} 
                onChange= { (e) =>setPoint_reference(e.target.value)} />
              ) : (
                <span>{formData.point_reference}</span>
              )}
            </div>


            <div className="info-item">
              <label className='textSubtitulo'>CEP</label>
              {isEditing ? (
                <input 
                type="text" 
                name="cep" 
                value={cep} 
                onChange={(e) => setCep(e.target.value)} />
              ) : (
                <span>{formData.cep}</span>
              )}
            </div>

            <div className="buttons">
              <button onClick={ isEditing ? saveChanges : toggleEdit}>{isEditing ? 'Salvar' : 'Editar'}</button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
              };

export default Profile;

import React, { useState, useContext } from 'react';
import './Profile.css';
import { UsuariosContext } from '../../contexts/GlobalContext';


const Profile = () => {
    const [view, setView] = useState('personal');
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        nome: 'Luigi dos Santos Bernardo',
        email: 'luigisantostk@gmail.com',
        cpf: '600.214.450-10',
        telefone: '(51)98457-4910',
        senha: '***********',
        nascimento: '30/01/2004',
        enderecoCpf: '94910-110',
        rua: 'Rua Imbui',
        referencia: 'Ao lado do MiniMercado Weber'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const saveChanges = () => {
        setIsEditing(false);
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
                            <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.nome}</span>
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
                            <input type="text" name="telefone" value={formData.telefone} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.telefone}</span>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Senha</label>
                        {isEditing ? (
                            <input type="password" name="senha" value={formData.senha} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.senha}</span>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Data de Nascimento</label>
                        {isEditing ? (
                            <input type="date" name="nascimento" value={formData.nascimento} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.nascimento}</span>
                        )}
                    </div>
                    <div className="buttons">
                        <button onClick={isEditing ? saveChanges : toggleEdit}>{isEditing ? 'Salvar' : 'Editar'}</button>
                    </div>
                </div>
            ) : (
                <div className="address-info">
                    <div className="info-item">
                        <label>CPF</label>
                        {isEditing ? (
                            <input type="text" name="enderecoCpf" value={formData.enderecoCpf} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.enderecoCpf}</span>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Rua/Avenida</label>
                        {isEditing ? (
                            <input type="text" name="rua" value={formData.rua} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.rua}</span>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Ponto de Referência</label>
                        {isEditing ? (
                            <input type="text" name="referencia" value={formData.referencia} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.referencia}</span>
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

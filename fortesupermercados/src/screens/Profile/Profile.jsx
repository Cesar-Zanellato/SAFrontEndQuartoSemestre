import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import { UsuariosContext } from '../../contexts/GlobalContext';
import axios from 'axios'


const Profile = () => {
    
    
    
    const { usuarioLogado, setUsuarioLogado } = useContext(UsuariosContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        password: '',
        address: '',
        name_street: '',
        point_reference: '',
        complement: '',
        cep: ''
        // nome: 'Luigi dos Santos Bernardo',
        // email: 'luigisantostk@gmail.com',
        // cpf: '600.214.450-10',
        // telefone: '(51)98457-4910',
        // senha: '***********',
        // nascimento: '30/01/2004',
        // enderecoCpf: '94910-110',
        // rua: 'Rua Imbui',
        // referencia: 'Ao lado do MiniMercado Weber'
    });
    const [view, setView] = useState('personal');
    const [isEditing, setIsEditing] = useState(false);
    
    
    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/users/${usuarioLogado.sub}`);
                const user = response.data;
                setFormData({
                    name: user.name,
                    email: user.email,
                    cpf: user.cpf,
                    phone: user.phone,
                    password: user.password, // Não exibir a senha real
                    name_street: user.name_street,
                    point_reference: user.point_reference,
                    complement: user.complement,
                    cep: user.cep
                });
            } catch (error) {
                console.error('Erro ao buscar usuário:', error);
            }
        };
    if (usuarioLogado) {
        fetchUserData();
    }
}, [usuarioLogado]);
//     fetchData();
//   }, []);

    // useEffect(async () => {
    //     console.log(usuarioLogado);
    // },[usuarioLogado])



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const saveChanges = async () => {
        try {
            await axios.put(`http://localhost:8090/users/${usuarioLogado.sub}`, formData);
            setIsEditing(false);
        } catch (error) {
            console.error('Erro ao salvar alterações:', error);
        }
    };

    // const saveChanges = () => {
    //     setIsEditing(false);
    // };



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
                            <input type="text" name="nome" value={formData.name} onChange={handleInputChange} />
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
                            <input type="text" name="telefone" value={formData.phone} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.phone}</span>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Senha</label>
                        {isEditing ? (
                            <input type="password" name="senha" value={formData.password} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.password}</span>
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
                        <label>Endereço</label>
                        {isEditing ? (
                            <input type="text" name="enderecoCpf" value={formData.name_street} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.name_street}</span>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Complemento</label>
                        {isEditing ? (
                            <input type="text" name="rua" value={formData.complement} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.complement}</span>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Ponto de Referência</label>
                        {isEditing ? (
                            <input type="text" name="referencia" value={formData.point_reference} onChange={handleInputChange} />
                        ) : (
                            <span>{formData.point_reference}</span>
                        )}
                    </div>
                    <div className="info-item">
                        <label>CEP</label>
                        {isEditing ? (
                            <input type="text" name="referencia" value={formData.cep} onChange={handleInputChange} />
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

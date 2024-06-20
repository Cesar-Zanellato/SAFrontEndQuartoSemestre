import React, { useState } from 'react';
import './Register.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';

function Register() {

  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const navigate = useNavigate();

  const saveUser = async () => {
    if (password !== confirmPassword) {
      alert('As senhas não correspondem');
      return;
    }

    try {
      const user = { cpf, name, email, phone, password };
      await api.post("/users", user);
      navigate('/login');
    } catch (error) {
      alert('Erro ao registrar usuário');
    }
  }

  const handleCpfChange = (e) => {
    const formattedCpf = e.target.value.replace(/\D/g, '').slice(0, 11);
    setCpf(formattedCpf);
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = e.target.value.replace(/\D/g, '').slice(0, 11);
    setPhone(formattedPhone);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };

  const formatCpf = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  };

  return (
    <div className="cadastro-container">
      <form className="cadastro-form">

        <div className="form-group">
          <label>CPF</label>
          <input
            type="text"
            className="form-input"
            value={formatCpf(cpf)}
            onChange={handleCpfChange}
            placeholder="___.___.___-__"
          />
        </div>

        <div className="form-group">
          <label>Nome do Responsável</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Data de Nascimento</label>
          <input type="date" className="form-input" />
        </div>

        <div className="form-group">
          <label>Celular</label>
          <input
            type="text"
            className="form-input"
            value={formatPhone(phone)}
            onChange={handlePhoneChange}
            placeholder="(__) _____-____"
          />
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="form-group">
          <label>Confirmar Senha</label>
          <input
            type="password"
            className="form-input"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        {!passwordsMatch && (
          <div className="error-message">Senhas não coincidem</div>
        )}

        <button onClick={saveUser} type='button' className="submit-button" disabled={!passwordsMatch}>
          Cadastrar
        </button>

      </form>
    </div>
  );
};

export default Register;

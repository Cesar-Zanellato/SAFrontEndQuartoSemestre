import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleCpfChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      setCpf(value);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(password === e.target.value);
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
          <input type="text" className="form-input" />
        </div>
        {/* <div className="form-group">
          <label>Sobrenome do Responsável</label>
          <input type="text" className="form-input" />
        </div> */}
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
          <input type="email" className="form-input" />
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
        <button type="submit" className="submit-button" disabled={!passwordsMatch}>
          Concluir
        </button>
      </form>
    </div>
  );
};

export default Register;

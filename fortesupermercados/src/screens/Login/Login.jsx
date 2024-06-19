import './Login.css';
import Header from '../../components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UsuariosContext } from '../../contexts/GlobalContext';
import {jwtDecode} from 'jwt-decode';

function Login() {
  const { usuarioLogado, setUsuarioLogado } = useContext(UsuariosContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (err) {
      console.error('Erro ao decodificar o token:', err);
    }
  };

  const loginUser = async () => {
    try {
      const user = { email, password };
      const response = await axios.post("http://localhost:8090/login", user);
      const token = response.data;

      if (typeof token === 'string') {
        console.log(token);
        localStorage.setItem('token', token);

        let userData = decodeToken(token);

        if (userData) {
          console.log('User Data:', userData);
          setUsuarioLogado(userData);
          navigate('/');
        } else {
          console.error('Erro ao decodificar o token.');
          alert('Erro ao fazer login. Token inválido.');
        }
      } else {
        console.error('Token inválido:', token);
        alert('Erro ao fazer login. Token inválido.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='container'>
      <div className='divLogin'>
        <div className='divLogoForte'>
          <img className='logoSuperLogin' src="./public/logo_supermercado.png" alt="" />
        </div>

        <div className='divInputEmail'>
          <input
            placeholder='E-mail'
            className='inputEmail'
            type="text"
            value={email}
            onChange={handleEmailChange} />
        </div>

        <div className='divInputSenha'>
          <input
            placeholder='Senha'
            className='inputSenha'
            type="text"
            value={password}
            onChange={handlePasswordChange} />
        </div>

        <div className='divBotoes'>
          <div onClick={loginUser} className='botaoEntrar'>
            <p className='entrarParag'>Entrar</p>
          </div>

          <Link to="/register" className='botaoCadastrar'>
            <div>
              <p className='cadastrarParag'>Cadastrar</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

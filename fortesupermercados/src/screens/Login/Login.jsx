import './Login.css';
import Header from '../../components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UsuariosContext } from '../../contexts/GlobalContext';
import {jwtDecode} from 'jwt-decode';

function Login() {
  const [, setUsuarioLogado ] = useContext(UsuariosContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const decodeToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (err) {
      console.error('Erro ao decodificar o token:', err);
      return null;
    }
  };

  const loginUser = async () => {
    try {
      const user = { email, password };
      const response = await axios.post("http://localhost:8090/login", user);
      const token = response.data;

      if (typeof token === 'string') {
        localStorage.setItem('token', token);
        console.log(token);
        const userData = decodeToken(token);
        console.log(userData);

        if (userData) {
          setUsuarioLogado(userData);   
          console.log("Rodei depois do setUsuarioLogado")
          navigate('/home');
        } else {
          alert('1Erro ao fazer login. Token inválido.');
        }
      } else {
        alert('2Erro ao fazer login. Token inválido.');
      }
    } catch (error) {
      console.log("error: " , error)
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className='container'>
      <div className='divLogin'>
        <div className='divLogoForte'>
          <img className='logoSuperLogin' src="./public/logo_supermercado.png" alt="Logo" />
        </div>
        <div className='divInputEmail'>
          <input
            placeholder='E-mail'
            className='inputEmail'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='divInputSenha'>
          <input
            placeholder='Senha'
            className='inputSenha'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
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

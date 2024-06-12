import './Login.css'
import Header from '../../components/Header/Header'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import axios from 'axios'
import { UsuariosContext } from '../../contexts/GlobalContext';
import {jwtDecode} from 'jwt-decode'






function Login(){
   
    const { usuarioLogado, setUsuarioLogado } = useContext(UsuariosContext);
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  function decodeToken(token) {
    try {
        // Decodifica o payload do token
        const decoded = jwtDecode(token);

        // Acessa o ID contido no token

        const userId = decoded.sub; // ou decoded.id, dependendo de onde o ID está armazenado
        console.log('User ID:', userId);
        return userId

        
    } catch (err) {
        console.error('Erro ao decodificar o token:', err);
    }
}
  const loginUser = async () => {
      


      try{
        const user = {
            email,
            password,
          }
          const token = await axios.post("http://localhost:8080/login", user )
          localStorage.setItem('token', token.data)
           
          let userName = decodeToken(token.data)
          
          setUsuarioLogado(userName)

          navigate('/')
      }catch{
        alert('erro')
      }
      
    }
 

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
 
    return(
   
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
                    onChange={handlePasswordChange}/>
                </div> 

               

                <div className='divBotoes'>


                    <div onClick={loginUser} className='botaoEntrar'>
                        <p className='entrarParag'>Entrar</p>
                    </div>
                    
                    <Link  to="/register" className='botaoCadastrar'>
                        <div>
                            <p className='cadastrarParag'>Cadastrar</p>
                        </div>
                    </Link>
                    

                </div>

            </div>
        </div>
    
    )
}

export default Login;
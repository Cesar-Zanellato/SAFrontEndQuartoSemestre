import './Login.css'
import Header from '../../components/Header/Header'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios'
import { TextField } from '@mui/material';



function Login(){

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
      
      try{
        const user = {
            email,
            password,
          }
          const token = await axios.post("http://localhost:8080/login", user )
          localStorage.setItem('token', token.data)
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


                <TextField variant="standard" label="E-mail">

                </TextField>
                {/* <div className='divInputEmail'>
                    <input 
                    placeholder='E-mail'  
                    className='inputEmail' 
                    type="text"
                    value={email}
                    onChange={handleEmailChange} />
                </div> */}

                {/* <div className='divInputSenha'>
                    <input 
                    placeholder='Senha' 
                    className='inputSenha' 
                    type="text"
                    value={password}
                    onChange={handlePasswordChange}/>
                </div> */}

                <TextField variant="standard" label="Senha">

                </TextField>

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
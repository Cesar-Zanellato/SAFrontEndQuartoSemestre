import './Login.css'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';
function Login(){
    return(
   
        <div className='container'>
            <div className='divLogin'>
                
                <div className='divLogoForte'>
                    <img className='logoSuperLogin' src="./public/logo_supermercado.png" alt="" />
                </div>

                <div className='divInputEmail'>
                    <input placeholder='E-mail'  className='inputEmail' type="text" />
                </div>

                <div className='divInputSenha'>
                    <input placeholder='Senha' className='inputSenha' type="text"/>
                </div>

                <div className='divBotoes'>

                    <div className='botaoEntrar'>
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
    
    )
}

export default Login;

import { useState } from 'react';
import jpIMG from './assets/jp.svg' 
import './style.css'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
  <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title">Bem Vindo!</span>
          <span className="login-form-title">
            <img src={jpIMG} alt="Jovem Progamador" />
          </span>

          <div className='wrap-input'>
            <input 
              className={email !== "" ? 'has-val input' : 'input'} 
              value={email} 
              type="email" 
              onChange={e => setEmail(e.target.value)}
            />
            <span className='focus-input' data-placeholder='Email'></span>
          </div>

          <div className='wrap-input'>
            <input 
              className={password !== "" ? 'has-val input' : 'input'}
              value={password} 
              type="password"
              onChange={e => setPassword(e.target.value)} 
            />
            <span className='focus-input' data-placeholder='Password'></span>
          </div>

          <div className='container-login-form-btn'>
            <button className='login-form-btn'>Login</button>
          </div>

          <div className='new-account-center'>
            <span className='txt1'>Não possui conta?</span>
            <a className='txt2' href='#'>Criar conta.</a>
          </div>

        </form>          
      </div>
    </div>
  </div>
  );
}

export default App;

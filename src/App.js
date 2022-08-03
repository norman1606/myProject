
import jpIMG from './assets/jp.svg' 

function App() {
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
            <input type="email" />
            <span className='focus-input' data-placeholder='Email'></span>
          </div>

          <div className='wrap-input'>
            <input type="password" />
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

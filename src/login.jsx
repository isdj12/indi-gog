import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css'
import Button from './component/button.jsx'
import { button } from './src.js'
import Poisk from './component/poisk.jsx'
import original from './assets/original.png'
import backgroundImage from './assets/Screenshot_7.png'
import './login.css'

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log("Попытка входа с email:", login);
    // Здесь будет логика авторизации
  };
  
  const handleRegister = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigate('/register');
  };

  return (
    <>
      <div className="header-container">
        <img src={original} alt="logo" className='logo' />
        <div className="button-container">
          <Button text={button[0].text} href={button[0].href} />
          <Button text={button[1].text} href={button[1].href} className="right-button" />
          <Button text={button[2].text} href={button[2].href} className="right-button" />
        </div>
        <div className="search-wrapper">
          <Poisk />
        </div>
      </div>
      <hr className='line'></hr>
      <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="login-container">
          <h2>Вход</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Логин:</label>
              <input type="text" placeholder="Введите логин" value={login} onChange={(e) => setLogin(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label>Пароль:</label>
              <input type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div className="form-buttons">
              <button type="submit" className="button login-button">войти</button>
              <Button text="зарегистрироваться" className="register-button" onClick={handleRegister} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;

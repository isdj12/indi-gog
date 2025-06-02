import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css'
import Button from './component/button.jsx'
import { button } from './src.js'
import Poisk from './component/poisk.jsx'
import original from './assets/original.png'
import backgroundImage from './assets/Screenshot_7.png'
import './login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    console.log("Попытка входа с email:", email);
    // Здесь будет логика авторизации
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
          <div className="home-link">
            <Link to="/">На главную</Link>
          </div>
        </div>
      </div>
      <hr className='line'></hr>
      <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="login-container">
          <h2>Вход</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Введите email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label>Пароль:</label>
              <input type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div className="form-buttons">
              <Button text="ВОЙТИ В СИСТЕМУ" className="login-button" onClick={handleSubmit} />
              <Button text="ЗАРЕГИСТРИРОВАТЬСЯ" href="/registration" className="register-button" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;

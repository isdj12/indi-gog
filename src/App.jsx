import './App.css'
import Button from './component/button.jsx'
import { button } from './src.js'
import Poisk from './component/poisk.jsx'
import Profile from './component/profile.jsx'
import original from './assets/original.png'

function App() {
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
          <Profile />
        </div>
      </div>
      <hr className='line'></hr>
    <div className="replacement-block">
      <div className='game-indicator'>
        <div className='game-indicator-foto'>
          <img src={original} alt="logo" className='foto' />
          <img src={original} alt="logo" className='foto' />
        </div>
      </div>
    </div>
    </>
  )
}

export default App

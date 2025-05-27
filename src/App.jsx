import './App.css'
import Button from './component/button.jsx'
import { button } from './src.js'
import Poisk from './component/poisk.jsx'
import Profile from './component/profile.jsx'
import screenshotImage from './assets/Screenshot_3.png'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <div className="header-container">
        <img src={reactLogo} alt="logo" className='logo' />
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
      <div>
      <img src={screenshotImage} alt="Screenshot" className='screenshot' />
      </div>
    </>
  )
}

export default App

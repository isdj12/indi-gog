import './App.css'
import Button from './component/button.jsx'
import { button } from './src.js'

function App() {
  return (
    <>
      <div className="header-container">
        <img src="/original.png" alt="original" className='logo' />
        <div className="button-container">
          <Button text={button[0].text} href={button[0].href} />
          <Button text={button[1].text} href={button[1].href} className="right-button" />
          <Button text={button[2].text} href={button[2].href} className="right-button" />
        </div>
      </div>
      <hr className='line'></hr>
    </>
  )
}

export default App

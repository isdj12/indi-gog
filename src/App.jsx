import './App.css'
import Button from './component/button.jsx'

function App() {
  return (
    <>
      <div className="header-container">
        <img src="/original.png" alt="original" className='logo' />
        <div className="button-container">
          <Button text="Первая кнопка" />
          <Button text="Вторая кнопка" className="right-button" />
        </div>
      </div>
      <hr className='line'></hr>
    </>
  )
}

export default App

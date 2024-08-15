import './App.css'
import { AShare, ClockTime, defineCustomElements } from './generated'

defineCustomElements();

function App() {

  return (
    <>
      <AShare url='http://localhost' urlTitle='Hola' text='Prueba'>Hola</AShare>
      <ClockTime timeZoneOffset={-240}></ClockTime>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import BaristaForm from './Components/BaristaForm';
import omgLogo from './assets/omg-logo.79cdfddd.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="title-container">
        <img src={omgLogo} alt="omg logo" className='omg-logo'/>
        <h1 className="title">On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App

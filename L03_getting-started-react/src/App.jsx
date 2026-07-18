import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Jimuel Jarina</h1>
      <h2>BSIS-3</h2>
      <h3>Fun Facts About Me: </h3>
      <ul>
        <li>I love watching anime, especially adventure series.</li>
        <li>My favorite food are natural foods.</li>
        <li>I'm a soft boy.</li>
      </ul>
      <p>As of now I have learned the basics of git commands that are very helpful in for this field. Aside from that, I learn how to push my self and get serious in my life becuase my instructor's strictness.</p>
    </>
  )
}

export default App

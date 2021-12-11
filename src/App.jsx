import { useState } from 'react'
import logo from './public/logo.png'
import './style/index.css'
import TagManager from 'react-gtm-module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const i = <FontAwesomeIcon icon={faCoffee} />
const tagManagerArgs = {
  gtmId: 'GTM-MW7CTZK'
}
TagManager.initialize(tagManagerArgs)

function App() {
  const [count, setCount] = useState(0)
  return (
  <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />  
      </header>
      <body className="App-body">
        <div className="amv-logo">
          <p className="name">Adam Mathew Vaughn</p>
          <hr />
          <p className="brand">Embedded<br />Systems</p>
        </div>
        <h1>Automating A Better Tomorrow</h1>
        <p>
          I'm Adam and I'm a full-stack web developer and embedded systems engineer. I'm currently working to combine my recent full-stack web development education with my background in construction and my love for hardware engineering. Embedded systems is the natural arris of the adjacent technological disciplines, and I'm excited to begin my path in the field. The juxtaposition of hardware and software has never been more at the forefront of our lives with the prevalence of the IoT and micro-controlled embedded systems via Raspberry Pi and Arduino. I feel like I have a chance to contribute to a better world through embedded systems and home automation, and I'm eagerly working towards the opportunity to do so.
        </p>
        <div className="LinksDiv">
          <a className="App-link" href="https://www.linkedin.com/in/vaughn-embedded-systems" target="_blank" rel="noopener noreferrer">Let's Connect<i className="fas fa-coffee"> {i}</i></a>
          <a className="App-link" href="mailto:adam@adammathewvaughn.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a className="App-link" href="sms:+12052596791" target="_blank" rel="noopener noreferrer">Text</a>
          <a className="App-link" href="tel:+12052596791" target="_blank" rel="noopener noreferrer">Call</a>
        </div>
      </body>
  </div>
  );
}

export default App
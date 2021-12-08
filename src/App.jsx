import { useState } from 'react'
import logo from './logo.png'
import './App.css'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-MW7CTZK'
}
TagManager.initialize(tagManagerArgs)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="header">
        <div className=""></div>
        <div className=""></div>
        <img src={logo} className="App-logo" alt="logo" />  
      </header>
      <body className="App-body">
<div className="amv-logo">
    <p className="name">Adam Mathew Vaughn</p>
    <hr />
    <p className="brand">Embedded<br />Systems</p>
</div>
    <h4>"Automating a better tomorrow"</h4>
        <p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J4lrDOR73cM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <a
            className="App-link"
            href="https://blog.adafruit.com/2020/10/16/building-embedded-linux-systems-embedded-linux-ee-jaydcarlson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Embedded Systems
          </a>
          <a
            className="App-link"
            href="mailto:adam@adammathewvaughn.com"
            target="_blank"
            rel="noopener noreferrer"
          > Email  
          </a>
          <a
            className="App-link"
            href="sms:+12052596791"
            target="_blank"
            rel="noopener noreferrer"
          >Text
          </a>
          <a
            className="App-link"
            href="tel:+12052596791"
            target="_blank"
            rel="noopener noreferrer"
          >Call
          </a>
        </p>
      </body>
    </div>
  )
}

export default App
import React from 'react'
import logo from '../img/orb.svg';

export default function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Saga Orb</h1>
        <p>A visionary to reform the society in an absolute interactive way.</p>
        <a className="btn btnone" href="https://github.com/MadhanDevlpr/saga-orb" target="_blank">
            Contribute
           
        </a>
        <a className="btn btntwo" href="/docs">
            Documentation
           
        </a>
      </header>
  )
}

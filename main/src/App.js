import React from 'react';
import './App.css';
import Header from './components/Header';
import Documentation from './components/Documentation';
import Orb from './components/Orb';
import { BrowserRouter as Router,Route, Link, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/docs"  element={<Documentation/>}/>
        <Route path="/orb"  element={<Orb/>}/>
      </Routes>
    </Router>
  );
}

export default App;
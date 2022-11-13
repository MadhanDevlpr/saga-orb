import React from 'react';
import './App.css';


import Header from './components/Header';
import Documentation from './components/Documentation';
import { BrowserRouter as Router,Route, Link, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/docs"  element={<Documentation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
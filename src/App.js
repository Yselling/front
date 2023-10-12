import React, { useState } from 'react';
import './App.css';
import Header from './components/organisms/Header/Header';
import Card from './components/atoms/Card/Card';
import Home from './components/pages/Home';
import Default from './components/templates/Default';
import Store from './components/pages/Store';
import About from './components/pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header buttons={["Home", "Store", "About", "Contact"]} onButtonClick={handleButtonClick} />
      <div>
        {currentPage === 'Home' && <Home/>}
        {currentPage === 'Store' && <Store/>}
        {currentPage === 'About' && <About/>}
        {currentPage === 'Contact' && <p>Contenu de la page Contact</p>}
      </div>
    </div>
  );
}

export default App;

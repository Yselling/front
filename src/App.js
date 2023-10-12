import React, { useState } from 'react';
import './App.css';
import Header from './components/organisms/Header/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header buttons={["Home", "Store", "About", "Contact"]} onButtonClick={handleButtonClick} />
      <div>
        {currentPage === 'Home' && <p>Contenu de la page d'accueil</p>}
        {currentPage === 'Store' && <p>Contenu de la page Store</p>}
        {currentPage === 'About' && <p>Contenu de la page À Propos</p>}
        {currentPage === 'Contact' && <p>Contenu de la page Contact</p>}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './components/organisms/Header/Header';
import Card from './components/atoms/Card/Card';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header buttons={["Home", "Store", "About", "Contact"]} onButtonClick={handleButtonClick} />
      <div>
        {currentPage === 'Home' && <Card bg-color="red" title="Titre de la carte" text="Texte de la carte" />}
        {currentPage === 'Store' && <p>Contenu de la page Store</p>}
        {currentPage === 'About' && <p>Contenu de la page À Propos</p>}
        {currentPage === 'Contact' && <p>Contenu de la page Contact</p>}
      </div>
    </div>
  );
}

export default App;

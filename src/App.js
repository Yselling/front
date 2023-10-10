import './App.css';

import Header from './components/organisms/Header/Header';

function App() {
  const forname = "Louis";
  return (
    <div className="App">
      <Header buttons={["1", "2", "3"]}>
      </Header>
    </div>
  );
}

export default App;

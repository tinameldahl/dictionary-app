import logo from "./logomeldahl.png";
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="Dictionary"/>
      </main>
      <footer className="App-footer">
        <hr/>
        <small>
          Coded by Tina Meldahl - <a href="https://github.com/tinameldahl/dictionary-app" rel="noreferrer"  target="_blank">GitHub</a>
        </small>
      </footer>
      </div>
    </div>
  );
}

export default App;

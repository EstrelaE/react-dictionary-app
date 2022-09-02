import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App.logo img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Estrela Espiridião</footer>
      </div>
    </div>
  );
}

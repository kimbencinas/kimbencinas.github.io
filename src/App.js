import './App.css';
import { Link } from 'react-router-dom';
import GradientText from './Components/TextDecoration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          Home
          <Link to ="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <button>Resume</button>
        </nav>
      </header>
      <div className="main-content">
        <h3>Hello, my name is</h3>
        <h1>Kimberly Encinas</h1>
        <h3>I build websites</h3>
      </div>
    </div>
  );
}

export default App;

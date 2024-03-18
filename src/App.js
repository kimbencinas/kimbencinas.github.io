import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-end gap-4 p-4 font-medium">
          <Link to="/" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Home</Link>
          <Link to="/about" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">About</Link>
          <Link to="/projects" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Projects</Link>
          <Link to="/contact" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Contact</Link>
          <button className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Resume</button>
        </div>
      </header>
      <div className="main-content justify-center items-center p-7">
        <h3 className="text-2xl">Hello, my name is</h3>
        <h1 className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-4xl">Kimberly Encinas</h1>
        <h3 className="text-2xl">I build websites</h3>
      </div>
    </div>
  );
}

export default App;

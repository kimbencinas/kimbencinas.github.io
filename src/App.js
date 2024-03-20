import './App.css';
import Navbar from './Components/Navbar';
import Socials from './Components/Socials';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App font-inter">
      <Navbar />
      <div className="main-content justify-center items-center p-7">
        <h3 className="text-2xl">Hello, my name is</h3>
        <h1 className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-5xl font-semibold">Kimberly Encinas</h1>
        <h3 className="text-2xl">I build websites</h3>
      </div>
      <div className="short-bio">
        <p>I'm a web developer from California who has a passion for building websites and other digital experiences.</p>
      </div>
      <Socials />
    </div>
  );
}

export default App;

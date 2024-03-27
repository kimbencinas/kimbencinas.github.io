import './App.css';
import Navbar from './Components/Navbar';
import Socials from './Components/Socials';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import placeholderImg from './img/placeholder-image.jpg'

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content justify-center items-center p-7">
        <h3 className="text-2xl">Hello, my name is</h3>
        <h1 className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-5xl font-semibold">Kimberly Encinas</h1>
        <h3 className="text-2xl">I build websites</h3>
      </div>
      <div className="short-bio flex ml-6 gap-4">
        <p className="text-left">I'm a web developer from California who has a passion for building websites and other digital experiences.</p>
        <img src={placeholderImg} alt="logo" className="justify-end size-64" />
      </div>
      <Socials />
    </div>
  );
}

export default App;

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
      <div className="main-content md:flex flex-row xs:flex-row sm:flex-row justify-center items-center xs:p-4 md:p-20">
        <div>
          <h3 className="xs:text-2xl md:text-2xl md:ml-4 xs:mb-4 md:mb-4 xs:text-center sm:text-center md:text-left">Hello, my name is</h3>
          <h1 className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-customPurple to-customPink text-5xl font-semibold xs:mb-5 md:mb-4 xs:text-center sm:text-center md:text-left">Kimberly Encinas</h1>
          <h3 className="xs:text-2xl md:text-2xl mb-10 md:ml-4 xs:text-center sm:text-center md:text-left">I build websites</h3>
          <p className="xs:text-lg sm:text-2xl xs:text-center sm:text-center md:text-left xs:mb-5 sm:mb-8">I'm a web developer from California who has a passion for building websites and other digital experiences.</p>
        </div>
        <img src={placeholderImg} alt="logo" className="md:ml-12 mx-auto md:mx-0" />
      </div>
      <Socials />
    </div >
  );
}

export default App;

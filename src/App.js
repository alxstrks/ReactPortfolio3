import logo from './logo.svg';
import './App.css';
import NavBarSection from './components/NavBarSection/NavBarSection';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="px-5 lg:px-44 bg-gradient-to-r from-zinc-900 to-black">
      <NavBarSection />
      <div>
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

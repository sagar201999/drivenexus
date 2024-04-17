import './App.css';
import About from './Pages/About';
import Cars from './Pages/Cars';
import Footer from './Pages/Footer';
import Hero from './Pages/Hero';
import Navbar from './Pages/Navbar';
import Vechile from './Pages/Vechile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Vechile />
      <Cars />
      <Footer />

    </div>
  );
}

export default App;

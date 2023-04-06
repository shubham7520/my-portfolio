import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import About from './about/About';
import Project from './projects/Project';
import Contact from './contact/Contact';
import Skill from './skill/Skill';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

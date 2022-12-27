import '../src/styles/styles.css';
import Header from "./Components/Header/Header";
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Tech from './Components/Tech/Tech';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


export default function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Tech/>
      <Contact/>
      <Footer/>
    </div>
  );
}



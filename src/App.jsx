import '../src/styles/styles.css';
import Header from "./Components/Header/Header";
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


export default function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      
    </div>
  );
}



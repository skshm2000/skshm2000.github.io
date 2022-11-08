import './App.css';
import FirstView from './Components/FirstView';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TechStack from './Components/TechStack/TechStack';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <>
      <Navbar />
      <FirstView/>
      <About />
      <TechStack />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    
    <div className="App">
    <Nav/>
    <Project/>
    <About/>
    <Contact/>
    </div>
  );
}

export default App;

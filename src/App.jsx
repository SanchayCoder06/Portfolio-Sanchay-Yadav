import About from "./Components/About/About";
import Certifications from "./Components/Certificates/Certificates";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
function App() {
  return ( 
  <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home/>
    <About/>
    <Certifications/>
    <Projects/>
    <Contact/>
  </div> 
  );
}

export default App;

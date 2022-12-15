import "./App.css";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App bg-backgroundLight">
      <Nav />

      <Intro />

      <Skills />

      <Projects />

      <Blogs />

      <About />

      <Contact />
    </div>
  );
}

export default App;

import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Project from "./components/project";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
       <Footer/>
    </div>
  );
}

export default App;

import Navbar from "./component/layout/Navbar";
import Hero from "./component/layout/Hero";
import About from "./component/layout/About";
import Projects from "./component/layout/Projects";
import Contact from "./component/layout/Contact";
import Skills from "./component/layout/Skills";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

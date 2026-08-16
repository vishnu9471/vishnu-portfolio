import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import AutomationFlow from "../components/AutomationFlow";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <AutomationFlow />
        <Experience />
        <Projects />
        <Education />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
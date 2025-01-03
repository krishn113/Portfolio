import { Fragment } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
<div className="font-sans w-screen bg-gradient-to-l from-gray-200 via-fuchsia-100 to-stone-100 dark:bg-gradient-to-l dark:from-[#0f172a] dark:via-[#0D0125]  dark:to-[#130136]">
      <Fragment>
            <Navbar />
            <div
                style={{
                    overflowY: "scroll",
                }}
            ></div>
      </Fragment>
      <Navbar/>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

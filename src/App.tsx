// import { BrowserRouter } from "react-router-dom";

import { Hero, Projects, Experience, Tech, Contact, Footer, About, Navbar, StarsCanvas} from "./components";

const App = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Projects />
        <Experience />
        <div>
          <Contact/>
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

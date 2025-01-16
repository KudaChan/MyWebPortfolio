import { BrowserRouter } from "react-router-dom";

import { Hero, Projects, Experience, Tech, EmailForm, Footer, Overview, Navbar, Canvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Overview />
        <Projects />
        <Tech />
        <Experience />
        <div>
          <EmailForm />
          <Canvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

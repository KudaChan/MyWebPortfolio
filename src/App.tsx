import { Navbar, Hero, Projects, Skills, Experience, Contact, Footer } from "./component/section/index";

const App = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Hero />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
};

export default App;
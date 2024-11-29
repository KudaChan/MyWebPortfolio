import { Navbar, Hero, Projects, Skills, Experience, Contact, Footer } from "./component/section/index";

const App = () => {
  return (
    <div>
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
        <Skills />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
};

export default App;
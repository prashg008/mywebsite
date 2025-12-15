import { Fragment } from 'react'
import Canvas from './Canvas.tsx'
import Navigation from './components/Navigation.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import SkillsEnhanced from './components/SkillsEnhanced.tsx'
// import Experience from './components/Experience.tsx'
// import Projects from './components/Projects.tsx'
// import Testimonials from './components/Testimonials.tsx'
import Contact from './components/Contact.tsx'

function App() {
  return (
    <Fragment>
      <Canvas />
      <Navigation />
      <Hero />
      <About />
      <SkillsEnhanced />
      {/* <Experience />
      <Projects />
      <Testimonials /> */}
      <Contact />
      <footer className="footer-premium">
        <div className="container">
          <p>&copy; 2024 Prashanth G. All rights reserved.</p>
          <p className="footer-tagline">Built with React, TypeScript & ❤️</p>
        </div>
      </footer>
    </Fragment>
  )
}

export default App
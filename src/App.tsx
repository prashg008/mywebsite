import { Fragment } from 'react'
import Canvas from './Canvas.tsx'
import NavigationFuturistic from './components/NavigationFuturistic.tsx'
import HeroFuturistic from './components/HeroFuturistic.tsx'
import AboutFuturistic from './components/AboutFuturistic.tsx'
import SkillsFuturistic from './components/SkillsFuturistic.tsx'
import ContactFuturistic from './components/ContactFuturistic.tsx'
import FooterFuturistic from './components/FooterFuturistic.tsx'

function App() {
  return (
    <Fragment>
      <Canvas />
      <NavigationFuturistic />
      <HeroFuturistic />
      <AboutFuturistic />
      <SkillsFuturistic />
      <ContactFuturistic />
      <FooterFuturistic />
    </Fragment>
  )
}

export default App

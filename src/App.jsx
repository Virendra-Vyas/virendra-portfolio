import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MarqueeBand from './components/MarqueeBand'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Cursor />
      <div id="bar" style={{ position: 'fixed', top: 0, left: 0, height: '1px', background: 'var(--gd)', zIndex: 600, width: '0%', transition: 'width 0.08s' }} />
      <Nav />
      <Hero loaded={loaded} />
      <MarqueeBand />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

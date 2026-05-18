import { useEffect, useState, lazy, Suspense } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MarqueeBand from './components/MarqueeBand'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'

// Lazy load below-fold sections — only fetched when needed
const Blog = lazy(() => import('./components/Blog'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Refresh all ScrollTrigger positions after fonts load
    // Prevents wrong trigger points caused by font-swap layout shifts
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh()
    })
  }, [])

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Cursor />
      <div
        id="bar"
        style={{
          position: 'fixed', top: 0, left: 0,
          height: '1px', background: 'var(--gd)',
          zIndex: 600, width: '0%', transition: 'width 0.08s',
        }}
      />
      <Nav />
      <Hero loaded={loaded} />
      <MarqueeBand />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Suspense fallback={null}>
        <Blog />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}
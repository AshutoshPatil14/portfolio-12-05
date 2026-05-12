import { useRef, useEffect } from 'react'
import Lenis from 'lenis'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const revealRefs = useRef([])
  const lenisRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    revealRefs.current.forEach((el) => {
      if (el) obs.observe(el)
    })

    return () => {
      obs.disconnect()
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About addToRefs={addToRefs} />
      <Skills addToRefs={addToRefs} />
      <Experience addToRefs={addToRefs} />
      <Projects addToRefs={addToRefs} />
      <Education addToRefs={addToRefs} />
      <Certifications addToRefs={addToRefs} />
      <Interests addToRefs={addToRefs} />
      <Contact addToRefs={addToRefs} />
      <Footer />
    </div>
  )
}

export default App

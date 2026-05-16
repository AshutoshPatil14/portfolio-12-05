import { useEffect, useRef, useState } from 'react'

function Navbar() {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav id="nav" ref={navRef}>
      <a href="#hero" className="nav-logo" onClick={closeMenu}>Ashutosh<span>.</span></a>
      <button className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>
      <div className={`nav-right ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a href="/Ashutosh-FullStack-Resume.pdf" download className="nav-resume-btn">
          Download Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar

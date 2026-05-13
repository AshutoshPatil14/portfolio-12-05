function Hero() {
  
  return (
    <section id="hero">
      <div className="hero-bg-text">AP</div>
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="eyebrow-line"></span> Available for opportunities
        </div>
        <h1 className="hero-name">Ashutosh<br />Patil</h1>
        <div className="hero-divider"></div>
        <p className="hero-role">// Full-Stack Developer · MERN Stack · Tech Enthusiast</p>
        <p className="hero-desc">
          Building scalable web applications with clean architecture, performance-first mindset, and
          a strong eye for UI/UX.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-fill">View Projects ↓</a>
          <a href="mailto:ashutosh.patil1409@gmail.com" className="btn-ghost">Get In Touch →</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="profile-card">
          <div className="profile-card-tag">// Quick Profile</div>
          <div className="profile-stat-row">
            <div className="pstat">
              <div className="pstat-num">9.42</div>
              <div className="pstat-label">B.Sc. CGPA</div>
            </div>
            <div className="pstat">
              <div className="pstat-num">8.14</div>
              <div className="pstat-label">M.Sc. CGPA</div>
            </div>
            <div className="pstat">
              <div className="pstat-num">AI</div>
              <div className="pstat-label">Specialisation</div>
            </div>
            <div className="pstat">
              <div className="pstat-num">5+</div>
              <div className="pstat-label">Certifications</div>
            </div>
          </div>
          <div className="contact-chips">
            <a href="mailto:ashutosh.patil1409@gmail.com" className="chip"
              ><span className="chip-icon">✉</span> ashutosh.patil1409@gmail.com</a
            >
            <a href="tel:+919130747809" className="chip"
              ><span className="chip-icon">✆</span> +91 91307 47809</a
            >
            <a href="https://linkedin.com/in/ashutosh-patil-556518191" target="_blank" className="chip"
              ><span className="chip-icon">in</span> LinkedIn Profile</a
            >
            <a href="https://github.com/AshutoshPatil14" target="_blank" className="chip"
              ><span className="chip-icon">⌥</span> github.com/AshutoshPatil14</a
            >
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

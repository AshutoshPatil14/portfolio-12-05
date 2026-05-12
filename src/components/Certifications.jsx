function Certifications({ addToRefs }) {
  return (
    <section id="certifications">
      <div className="reveal" ref={addToRefs}>
        <span className="section-kicker"><span className="kicker-num">06 —</span> Certifications</span>
      </div>
      <div className="reveal d1" ref={addToRefs}>
        <h2 className="section-heading">Credentials &amp;<br /><em>Achievements.</em></h2>
      </div>
      <div className="ruled-line reveal d2" ref={addToRefs}><div className="ruled-dot"></div></div>
      <div className="certs-table reveal d2" ref={addToRefs}>
        <div className="cert-row">
          <div className="cert-left-part">
            <div className="cert-bullet"></div>
            <span className="cert-name">MERN Stack Development — Awdiz Institute</span>
          </div>
          <span className="cert-year">Verified ✓</span>
        </div>
        <div className="cert-row">
          <div className="cert-left-part">
            <div className="cert-bullet"></div>
            <span className="cert-name"
              >Hewlett Packard Enterprise — Software Engineering Job Simulation</span
            >
          </div>
          <span className="cert-year">2025</span>
        </div>
        <div className="cert-row">
          <div className="cert-left-part">
            <div className="cert-bullet"></div>
            <span className="cert-name"
              >Accenture North America — Data Analytics & Visualisation Simulation</span
            >
          </div>
          <span className="cert-year">2025</span>
        </div>
        <div className="cert-row">
          <div className="cert-left-part">
            <div className="cert-bullet"></div>
            <span className="cert-name">Goldman Sachs — Software Engineering Virtual Experience</span>
          </div>
          <span className="cert-year">2024</span>
        </div>
        <div className="cert-row">
          <div className="cert-left-part">
            <div className="cert-bullet"></div>
            <span className="cert-name">SQL · Power BI · Tableau · Python Bootcamp · HTML5</span>
          </div>
          <span className="cert-year">Multi-cert</span>
        </div>
      </div>
    </section>
  )
}

export default Certifications

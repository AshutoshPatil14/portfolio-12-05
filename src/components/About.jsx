function About({ addToRefs }) {
  return (
    <section id="about">
      <div className="reveal" ref={addToRefs}>
        <span className="section-kicker"><span className="kicker-num">01 —</span> About Me</span>
      </div>
      <div className="reveal d1" ref={addToRefs}>
        <h2 className="section-heading">Crafting <em>Digital</em><br />Experiences.</h2>
      </div>
      <div className="ruled-line reveal d2" ref={addToRefs}><div className="ruled-dot"></div></div>
      <div className="about-cols">
        <div className="about-body reveal d2" ref={addToRefs}>
          <p>
            I'm <strong>Ashutosh Shashank Patil</strong>, a Full-Stack Developer specialising in the
            MERN stack — building production-ready applications that balance technical excellence
            with clean, accessible user interfaces.
          </p>
          <p>
            Holding an <strong>M.Sc. in Information Technology</strong> with a specialisation in
            Artificial Intelligence (CGPA 8.14) from Pillai HOC College, I bring both academic depth
            and real-world development experience to every project.
          </p>
          <p>
            Whether it's architecting REST APIs, implementing secure authentication systems, or
            crafting responsive frontends — I focus on solutions that
            <strong>scale, perform, and delight</strong> users on every device.
          </p>
        </div>
        <div className="reveal d3" ref={addToRefs}>
          <div className="aside-card">
            <div className="aside-title">At a Glance</div>
            <div className="aside-row">
              <span className="aside-key">Location</span><span className="aside-val">Mumbai, IN</span>
            </div>
            <div className="aside-row">
              <span className="aside-key">Degree</span><span className="aside-val">M.Sc. IT</span>
            </div>
            <div className="aside-row">
              <span className="aside-key">Specialisation</span><span className="aside-val">AI</span>
            </div>
            <div className="aside-row">
              <span className="aside-key">Stack</span><span className="aside-val">MERN</span>
            </div>
            <div className="aside-row">
              <span className="aside-key">Status</span
              ><span className="aside-val" style={{ color: 'var(--accent2)' }}>Available ●</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

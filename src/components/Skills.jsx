function Skills({ addToRefs }) {
  return (
    <section id="skills">
      <div className="reveal" ref={addToRefs}>
        <span className="section-kicker"><span className="kicker-num">02 —</span> Skills</span>
      </div>
      <div className="reveal d1" ref={addToRefs}>
        <h2 className="section-heading">Tech Stack &amp;<br /><em>Tooling.</em></h2>
      </div>
      <div className="ruled-line reveal d2" ref={addToRefs}><div className="ruled-dot"></div></div>
      <div className="skills-grid">
        <div className="skill-box reveal d1" ref={addToRefs}>
          <div className="skill-cat">Languages</div>
          <div className="skill-pills">
            <span className="pill">JavaScript</span><span className="pill">SQL</span
            ><span className="pill">HTML5</span><span className="pill">CSS3</span>
          </div>
        </div>
        <div className="skill-box reveal d2" ref={addToRefs}>
          <div className="skill-cat">Frontend</div>
          <div className="skill-pills">
            <span className="pill">React.js</span><span className="pill">TailwindCSS</span
            ><span className="pill">Bootstrap</span>
          </div>
        </div>
        <div className="skill-box reveal d3" ref={addToRefs}>
          <div className="skill-cat">Backend</div>
          <div className="skill-pills">
            <span className="pill">Node.js</span><span className="pill">Express.js</span
            ><span className="pill">REST APIs</span><span className="pill">JWT Auth</span>
          </div>
        </div>
        <div className="skill-box reveal d4" ref={addToRefs}>
          <div className="skill-cat">Databases</div>
          <div className="skill-pills">
            <span className="pill">MongoDB</span><span className="pill">MySQL</span>
          </div>
        </div>
        <div className="skill-box reveal d5" ref={addToRefs}>
          <div className="skill-cat">DevOps & Tools</div>
          <div className="skill-pills">
            <span className="pill">Git</span><span className="pill">GitHub</span
            ><span className="pill">Docker</span><span className="pill">Vercel</span
            ><span className="pill">Render</span><span className="pill">Postman</span
            ><span className="pill">VS Code</span>
          </div>
        </div>
        <div className="skill-box reveal d1" ref={addToRefs}>
          <div className="skill-cat">Analytics & AI</div>
          <div className="skill-pills">
            <span className="pill">Power BI</span><span className="pill">Tableau</span
            ><span className="pill">Python</span><span className="pill">Gen AI</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

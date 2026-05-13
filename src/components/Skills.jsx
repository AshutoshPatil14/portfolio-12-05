function Skills({ addToRefs }) {
  return (
    <section id="skills">
      <div className="reveal" ref={addToRefs}>
        <span className="section-kicker">
          <span className="kicker-num">02 —</span> Skills
        </span>
      </div>
      <div className="reveal d1" ref={addToRefs}>
        <h2 className="section-heading">
          Tech Stack &amp;
          <br />
          <em>Tooling.</em>
        </h2>
      </div>
      <div className="ruled-line reveal d2" ref={addToRefs}>
        <div className="ruled-dot"></div>
      </div>
      <div className="skills-grid">
        <div className="skill-box reveal d1" ref={addToRefs}>
          <div className="skill-cat">Languages</div>
          <div className="skill-pills">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <span className="pill">JavaScript</span>
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">SQL</span>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <span className="pill">HTML5</span>
            </a>
            <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
              <span className="pill">CSS3</span>
            </a>
          </div>
        </div>
        <div className="skill-box reveal d2" ref={addToRefs}>
          <div className="skill-cat">Frontend</div>
          <div className="skill-pills">
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              <span className="pill">React.js</span>
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">TailwindCSS</span>
            </a>
            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Bootstrap</span>
            </a>
          </div>
        </div>
        <div className="skill-box reveal d3" ref={addToRefs}>
          <div className="skill-cat">Backend</div>
          <div className="skill-pills">
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Node.js</span>
            </a>
            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Express.js</span>
            </a>
            <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer">
              <span className="pill">REST APIs</span>
            </a>
            <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
              <span className="pill">JWT Auth</span>
            </a>
          </div>
        </div>
        <div className="skill-box reveal d4" ref={addToRefs}>
          <div className="skill-cat">Databases</div>
          <div className="skill-pills">
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">MongoDB</span>
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">MySQL</span>
            </a>
          </div>
        </div>
        <div className="skill-box reveal d5" ref={addToRefs}>
          <div className="skill-cat">DevOps & Tools</div>
          <div className="skill-pills">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Git</span>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">GitHub</span>
            </a>
            <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Docker</span>
            </a>
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Vercel</span>
            </a>
            <a href="https://render.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Render</span>
            </a>
            <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Postman</span>
            </a>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">VS Code</span>
            </a>
          </div>
        </div>
        <div className="skill-box reveal d1" ref={addToRefs}>
          <div className="skill-cat">Analytics & AI</div>
          <div className="skill-pills">
            <a href="https://www.microsoft.com/en-us/power-platform/products/power-bi" target="_blank" rel="noopener noreferrer">
              <span className="pill">Power BI</span>
            </a>
            <a href="https://www.tableau.com/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Tableau</span>
            </a>
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              <span className="pill">Python</span>
            </a>
            <span className="pill">Gen AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

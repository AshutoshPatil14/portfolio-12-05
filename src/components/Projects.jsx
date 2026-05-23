function Projects({ addToRefs }) {
  return (
    <section id="projects">
      <div className="reveal" ref={addToRefs}>
        <span className="section-kicker">
          <span className="kicker-num">04 —</span> Projects
        </span>
      </div>
      <div className="reveal d1" ref={addToRefs}>
        <h2 className="section-heading">
          Featured
          <br />
          <em>Work.</em>
        </h2>
      </div>
      <div className="ruled-line reveal d2" ref={addToRefs}>
        <div className="ruled-dot"></div>
      </div>
      <div className="projects-list reveal d2" ref={addToRefs}>
        <div className="proj-row">
          <div className="proj-index">01</div>
          <div className="proj-info">
            <div className="proj-title">Reliance Digital Clone</div>
            <div className="proj-stack-tag">MERN · JWT · REST API · Vercel · CI/CD</div>
            <div className="proj-desc">
              A full-stack e-commerce platform built with MongoDB, Express.js, React.js, and Node.js
              — featuring JWT authentication, user management, and a responsive multi-device UI
              deployed via Vercel.
            </div>
            <div className="proj-features-mini">
              <span className="pfeat">JWT Auth</span>
              <span className="pfeat">User Management</span>
              <span className="pfeat">Responsive UI</span>
              <span className="pfeat">REST API</span>
              <span className="pfeat">Vercel Deploy</span>
              <span className="pfeat">GitHub CI/CD</span>
            </div>
          </div>
          <a
            href="https://rd-clone-react.vercel.app/"
            className="proj-link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

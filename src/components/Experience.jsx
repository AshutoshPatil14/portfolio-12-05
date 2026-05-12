function Experience({ addToRefs }) {
  return (
    <section id="experience">
      <div className="reveal" ref={addToRefs}>
        <span className="section-kicker"><span className="kicker-num">03 —</span> Experience</span>
      </div>
      <div className="reveal d1" ref={addToRefs}>
        <h2 className="section-heading">Professional<br /><em>Journey.</em></h2>
      </div>
      <div className="ruled-line reveal d2" ref={addToRefs}><div className="ruled-dot"></div></div>
      <div className="exp-wrap reveal d2" ref={addToRefs}>
        <div className="exp-sidebar">
          <div className="exp-year">2026</div>
          <div className="exp-company-big">LxGio India<br />Pvt. Ltd.</div>
        </div>
        <div className="exp-main">
          <div className="exp-header">
            <div className="exp-role">Trainee Front-End Developer Intern</div>
            <div className="exp-co">
              LxGio India Pvt. Ltd. — Belapur, Navi Mumbai &nbsp;|&nbsp; Mar 2026 – Apr 2026
            </div>
          </div>
          <div className="exp-points">
            <div className="exp-point">
              <span className="exp-point-num">01.</span
              ><span
                >Developed responsive and scalable user interfaces using React.js, JavaScript, HTML,
                and CSS.</span
              >
            </div>
            <div className="exp-point">
              <span className="exp-point-num">02.</span
              ><span
                >Participated in debugging, performance optimisation, and code quality improvement
                initiatives.</span
              >
            </div>
            <div className="exp-point">
              <span className="exp-point-num">03.</span
              ><span
                >Applied modern component-based architecture and front-end best practices across
                practical projects.</span
              >
            </div>
            <div className="exp-point">
              <span className="exp-point-num">04.</span
              ><span
                >Strengthened expertise in UI development, responsiveness, and maintainable code
                structures.</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

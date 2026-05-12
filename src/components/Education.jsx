function Education({ addToRefs }) {
  return (
    <section id="education">
      <div className="reveal" ref={addToRefs}>
        <span className="section-kicker"><span className="kicker-num">05 —</span> Education</span>
      </div>
      <div className="reveal d1" ref={addToRefs}>
        <h2 className="section-heading">Academic<br /><em>Foundation.</em></h2>
      </div>
      <div className="ruled-line reveal d2" ref={addToRefs}><div className="ruled-dot"></div></div>
      <div className="edu-split reveal d2" ref={addToRefs}>
        <div className="edu-panel">
          <div className="edu-big-num">MSc</div>
          <span className="edu-badge">Postgraduate</span>
          <div className="edu-deg">Master of Science in<br />Information Technology</div>
          <div className="edu-spec">Specialisation: Artificial Intelligence</div>
          <div className="edu-col">Pillai HOC College of Arts, Science & Commerce</div>
          <div className="edu-foot">
            <div>
              <div className="edu-gpa">8.14</div>
              <div className="edu-gpa-label">CGPA</div>
            </div>
            <div className="edu-yr">2022 – 2024</div>
          </div>
        </div>
        <div className="edu-panel">
          <div className="edu-big-num">BSc</div>
          <span className="edu-badge">Undergraduate</span>
          <div className="edu-deg">Bachelor of Science in<br />Information Technology</div>
          <div className="edu-spec">&nbsp;</div>
          <div className="edu-col">Pillai HOC College of Arts, Science & Commerce</div>
          <div className="edu-foot">
            <div>
              <div className="edu-gpa">9.42</div>
              <div className="edu-gpa-label">CGPA</div>
            </div>
            <div className="edu-yr">2019 – 2022</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

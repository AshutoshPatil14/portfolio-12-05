function Interests({ addToRefs }) {
  return (
    <section id="interests">
      <div className="reveal" ref={addToRefs}>
        <span className="section-kicker"><span className="kicker-num">07 —</span> Interests</span>
      </div>
      <div className="reveal d1" ref={addToRefs}>
        <h2 className="section-heading">Beyond<br /><em>Code.</em></h2>
      </div>
      <div className="ruled-line reveal d2" ref={addToRefs}><div className="ruled-dot"></div></div>
      <div className="interests-flex reveal d2" ref={addToRefs}>
        <div className="int-block">
          <div className="int-icon">⚙️</div>
          <div className="int-name">Technology Enthusiast</div>
        </div>
        <div className="int-block">
          <div className="int-icon">🎵</div>
          <div className="int-name">Music</div>
        </div>
        <div className="int-block">
          <div className="int-icon">🚗</div>
          <div className="int-name">Automotive</div>
        </div>
      </div>
    </section>
  )
}

export default Interests

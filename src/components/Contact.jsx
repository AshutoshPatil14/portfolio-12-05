function Contact({ addToRefs }) {
  return (
    <section id="contact">
      <div className="reveal" ref={addToRefs}>
        <p className="contact-pre">// Open to opportunities</p>
        <p className="contact-big">Let's build<br />something great.</p>
        <p className="contact-sub">Open to full-time roles, freelance projects, and collaborations.</p>
        <div className="contact-btns">
          <a href="mailto:ashutosh.patil1409@gmail.com" className="btn-white">Send Email ↗</a>
          <a
            href="https://linkedin.com/in/ashutosh-patil-556518191"
            target="_blank"
            className="btn-outline-w"
            >LinkedIn ↗</a
          >
          <a href="https://github.com/AshutoshPatil14" target="_blank" className="btn-outline-w"
            >GitHub ↗</a
          >
        </div>
      </div>
    </section>
  )
}

export default Contact

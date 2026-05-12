import { useEffect, useRef } from 'react'

function Marquee() {
  const mqRef = useRef(null)

  useEffect(() => {
    if (mqRef.current) {
      mqRef.current.innerHTML += mqRef.current.innerHTML
    }
  }, [])

  return (
    <div className="marquee-wrap">
      <div className="marquee-inner" id="mq" ref={mqRef}>
        <span className="mq-item">React.js <span className="mq-sep">✦</span></span>
        <span className="mq-item">Node.js <span className="mq-sep">✦</span></span>
        <span className="mq-item">MongoDB <span className="mq-sep">✦</span></span>
        <span className="mq-item">Express.js <span className="mq-sep">✦</span></span>
        <span className="mq-item">JWT Auth <span className="mq-sep">✦</span></span>
        <span className="mq-item">REST APIs <span className="mq-sep">✦</span></span>
        <span className="mq-item">TailwindCSS <span className="mq-sep">✦</span></span>
        <span className="mq-item">Docker <span className="mq-sep">✦</span></span>
        <span className="mq-item">Vercel <span className="mq-sep">✦</span></span>
        <span className="mq-item">CI/CD <span className="mq-sep">✦</span></span>
      </div>
    </div>
  )
}

export default Marquee

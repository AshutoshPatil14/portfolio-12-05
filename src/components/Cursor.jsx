import { useEffect, useRef, useState } from 'react'

function Cursor() {
  const curRef = useRef(null)
  const curRingRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return

    let mx = 0, my = 0, rx = 0, ry = 0
    const cur = curRef.current
    const ring = curRingRef.current

    const handleMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const tick = () => {
      if (cur) {
        cur.style.left = `${mx}px`
        cur.style.top = `${my}px`
      }
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      if (ring) {
        ring.style.left = `${rx}px`
        ring.style.top = `${ry}px`
      }
      requestAnimationFrame(tick)
    }

    const handleMouseEnter = () => {
      if (cur) {
        cur.style.width = '18px'
        cur.style.height = '18px'
      }
      if (ring) {
        ring.style.width = '48px'
        ring.style.height = '48px'
      }
    }

    const handleMouseLeave = () => {
      if (cur) {
        cur.style.width = '10px'
        cur.style.height = '10px'
      }
      if (ring) {
        ring.style.width = '32px'
        ring.style.height = '32px'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.querySelectorAll('a,button').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
    tick()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.querySelectorAll('a,button').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isMobile])

  return (
    <>
      {!isMobile && (
        <>
          <div className="cur" ref={curRef}></div>
          <div className="cur-ring" ref={curRingRef}></div>
        </>
      )}
    </>
  )
}

export default Cursor

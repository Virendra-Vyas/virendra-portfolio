import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    // Build trail elements
    const trails = []
    for (let i = 0; i < 7; i++) {
      const d = document.createElement('div')
      d.className = 'cursor-trail'
      d.style.width = (7 - i * 0.7) + 'px'
      d.style.height = (7 - i * 0.7) + 'px'
      d.style.opacity = (0.45 - i * 0.055)
      document.body.appendChild(d)
      trails.push({ el: d, x: 0, y: 0 })
    }

    let cx = 0, cy = 0, rx = 0, ry = 0
    const tp = trails.map(() => ({ x: 0, y: 0 }))

    const onMove = (e) => {
      cx = e.clientX; cy = e.clientY
      if (dot.current) {
        dot.current.style.left = cx + 'px'
        dot.current.style.top = cy + 'px'
      }
    }
    document.addEventListener('mousemove', onMove, { passive: true })

    let rafId
    const loop = () => {
      rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12
      if (ring.current) {
        ring.current.style.left = rx + 'px'
        ring.current.style.top = ry + 'px'
      }
      tp[0].x += (cx - tp[0].x) * 0.25
      tp[0].y += (cy - tp[0].y) * 0.25
      for (let i = 1; i < tp.length; i++) {
        tp[i].x += (tp[i - 1].x - tp[i].x) * 0.3
        tp[i].y += (tp[i - 1].y - tp[i].y) * 0.3
      }
      trails.forEach((t, i) => {
        t.el.style.left = tp[i].x + 'px'
        t.el.style.top = tp[i].y + 'px'
      })
      rafId = requestAnimationFrame(loop)
    }
    loop()

    // Attach hover listeners once after mount — no MutationObserver needed
    const addBig = () => { dot.current?.classList.add('big'); ring.current?.classList.add('big') }
    const remBig = () => { dot.current?.classList.remove('big'); ring.current?.classList.remove('big') }

    const attach = () => {
      document.querySelectorAll('a, button, .pcard, .ei, .ski, .cl').forEach(el => {
        el.removeEventListener('mouseenter', addBig)
        el.removeEventListener('mouseleave', remBig)
        el.addEventListener('mouseenter', addBig)
        el.addEventListener('mouseleave', remBig)
      })
    }

    // Run once after all components render, then again after scroll sections animate in
    const t1 = setTimeout(attach, 600)
    const t2 = setTimeout(attach, 2000)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      clearTimeout(t1)
      clearTimeout(t2)
      trails.forEach(t => t.el.remove())
    }
  }, [])

  return (
    <>
      <div id="c1" ref={dot} className="cursor-dot" />
      <div id="c2" ref={ring} className="cursor-ring" />
    </>
  )
}
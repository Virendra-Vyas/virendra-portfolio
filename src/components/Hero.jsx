import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import * as THREE from 'three'
import './Hero.css'

function splitLetters(text, italic = false) {
  return text.split('').map((c, i) => (
    <span key={i} className={`hc${italic ? ' hc-i' : ''}`}>
      {c === ' ' ? '\u00A0' : c}
    </span>
  ))
}

export default function Hero({ loaded }) {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)
  const animatedRef = useRef(false)

  // Three.js setup
  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const scene = new THREE.Scene()
    const W = cv.offsetWidth || window.innerWidth / 2
    const H = cv.offsetHeight || window.innerHeight
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100)
    camera.position.z = 5
    const renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0, 0)

    const g1 = new THREE.IcosahedronGeometry(1.8, 2)
    const m1 = new THREE.MeshBasicMaterial({ color: 0xD4A53A, wireframe: true, transparent: true, opacity: 0.18 })
    const mesh1 = new THREE.Mesh(g1, m1)
    scene.add(mesh1)

    const g2 = new THREE.IcosahedronGeometry(2.6, 1)
    const m2 = new THREE.MeshBasicMaterial({ color: 0xD4A53A, wireframe: true, transparent: true, opacity: 0.05 })
    const mesh2 = new THREE.Mesh(g2, m2)
    scene.add(mesh2)

    let tx = 0, ty = 0
    const onMouse = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 0.7
      ty = (e.clientY / window.innerHeight - 0.5) * 0.7
    }
    document.addEventListener('mousemove', onMouse)

    const onResize = () => {
      const nW = cv.offsetWidth, nH = cv.offsetHeight
      camera.aspect = nW / nH
      camera.updateProjectionMatrix()
      renderer.setSize(nW, nH)
    }
    window.addEventListener('resize', onResize)

    let rafId
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      mesh1.rotation.x += 0.004; mesh1.rotation.y += 0.007
      mesh2.rotation.x -= 0.0025; mesh2.rotation.y -= 0.004
      camera.position.x += (tx - camera.position.x) * 0.035
      camera.position.y += (-ty - camera.position.y) * 0.035
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  // Hero entrance animations (after loader)
  useEffect(() => {
    if (!loaded || animatedRef.current) return
    animatedRef.current = true

    const tl = gsap.timeline()
    tl.to(canvasRef.current, { opacity: 1, duration: 1.2, ease: 'power2.out' })
      .to('.h-eye-in', { y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.8')
      .to('.hc', { y: 0, rotateX: 0, opacity: 1, stagger: 0.04, duration: 0.8, ease: 'back.out(1.5)', transformPerspective: 700 }, '-=0.4')
      .to('.h-sub', { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' }, '-=0.2')
      .to('.hbtns', { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }, '-=0.4')
      .to('.hstats', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .to('.h-badge', { opacity: 1, y: 0, stagger: 0.15, duration: 0.55, ease: 'power2.out' }, '-=0.4')

    // Counter animation
    ;[['sc1', 8], ['sc2', 5], ['sc3', 5]].forEach(([id, n]) => {
      let v = 0
      const el = document.getElementById(id)
      const t = setInterval(() => {
        if (el) el.textContent = v = Math.min(v + 1, n)
        if (v >= n) clearInterval(t)
      }, 110)
    })

    // Scroll exit
    gsap.to('.h-l', {
      rotationX: 10,
      transformOrigin: 'center bottom',
      transformPerspective: 900,
      opacity: 0, y: -40, ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.3,
      }
    })
  }, [loaded])

  // 3D mouse parallax on name
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (e) => {
      const r = hero.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) / r.width
      const y = (e.clientY - r.top - r.height / 2) / r.height
      gsap.to([row1Ref.current, row2Ref.current], {
        rotationY: x * 4, rotationX: -y * 2.5,
        transformPerspective: 1000,
        ease: 'power2.out', duration: 0.9,
      })
    }
    const onLeave = () => {
      gsap.to([row1Ref.current, row2Ref.current], {
        rotationY: 0, rotationX: 0, duration: 1.1, ease: 'power2.out',
      })
    }
    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const handleMag = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    gsap.to(el, { x: (e.clientX - rect.left - rect.width / 2) * 0.28, y: (e.clientY - rect.top - rect.height / 2) * 0.28, duration: 0.4, ease: 'power2.out' })
  }
  const resetMag = (e) => gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.5)' })

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="h-l">
        <div className="h-eye">
          <span className="h-eye-in">Senior Full Stack Developer · .NET · React · Azure</span>
        </div>
        <div className="h-name">
          <div className="h-row" ref={row1Ref}>{splitLetters('Virendra')}</div>
          <div className="h-row h-row-i" ref={row2Ref}>{splitLetters('Vyas.', true)}</div>
        </div>
        <p className="h-sub">
          I build <strong>full-stack web applications</strong> businesses depend on.
          Booking systems, payment platforms, SaaS products —{' '}
          <strong>production code</strong>, real clients, 8+ years.
        </p>
        <div className="hbtns">
          <a href="#projects" className="hb1" onClick={e => scrollTo(e, '#projects')}
            onMouseMove={handleMag} onMouseLeave={resetMag}>
            <span>View Work →</span>
          </a>
          <a href="/cv.pdf" download="Virendra_Vyas_CV.pdf" className="hb-cv">
            Download CV ↓
          </a>
          <a href="#contact" className="hb2" onClick={e => scrollTo(e, '#contact')}>
            Get in Touch
          </a>
        </div>
        <div className="hstats">
          <div>
            <div className="hs-n"><span id="sc1">0</span><sup>+ yrs</sup></div>
            <div className="hs-l">Experience</div>
          </div>
          <div>
            <div className="hs-n"><span id="sc2">0</span></div>
            <div className="hs-l">Devs Led</div>
          </div>
          <div>
            <div className="hs-n"><span id="sc3">0</span><sup>+</sup></div>
            <div className="hs-l">Platforms Built</div>
          </div>
        </div>
      </div>
      <div className="h-r">
        <canvas id="geo" ref={canvasRef} style={{ opacity: 0 }}></canvas>
        <div className="h-badge b1">
          <span className="bv">true</span>
          <span className="bk">available_for_work</span>
        </div>
        <div className="h-badge b2">
          <span className="bv">.NET 7/8 + React</span>
          <span className="bk">primary_stack</span>
        </div>
      </div>
    </section>
  )
}

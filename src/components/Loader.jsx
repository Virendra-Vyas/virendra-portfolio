import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Loader.css'
export default function Loader({ onDone }) {
  const loaderRef = useRef(null)
  const fillRef = useRef(null)
  const logoRef = useRef(null)
  const labelRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => { if(loaderRef.current) loaderRef.current.style.display='none'; onDone() } })
    tl.to(logoRef.current,{opacity:1,y:0,duration:.6,ease:'power3.out'})
      .to(labelRef.current,{opacity:1,duration:.3})
      .to(fillRef.current,{width:'100%',duration:.85,ease:'power2.inOut'})
      .to(loaderRef.current,{yPercent:-100,duration:.9,ease:'expo.inOut',delay:.15})
  }, [])
  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader-logo" ref={logoRef}>VV</div>
      <div className="loader-bar"><div className="loader-fill" ref={fillRef}></div></div>
      <div className="loader-label" ref={labelRef}>Loading portfolio</div>
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../data/portfolio'
import './Experience.css'
gsap.registerPlugin(ScrollTrigger)
export default function Experience(){
  const listRef=useRef(null)
  useEffect(()=>{
    const ctx=gsap.context(()=>{
      gsap.from('.ei',{x:-30,opacity:0,stagger:.1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:listRef.current,start:'top 85%'}})
      ScrollTrigger.create({trigger:listRef.current,start:'top 70%',onEnter:()=>listRef.current?.classList.add('on')})
    })
    return()=>ctx.revert()
  },[])
  return(
    <section className="esec" id="experience">
      <div><div className="se">Career</div><h2 className="sh">Work<br/><em>history.</em></h2></div>
      <div className="elist" ref={listRef}>
        {experience.map((e,i)=>(
          <div className="ei" key={i}>
            <div><span className="eid">{e.date}</span><div className="eco">{e.company}</div><div className="eloc">{e.location}</div>{e.current&&<span className="ecur">CURRENT</span>}</div>
            <div><div className="er">{e.role}</div><p className="edesc">{e.desc}</p><div className="estk">{e.stack.map(s=><span key={s}>{s}</span>)}</div></div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'
gsap.registerPlugin(ScrollTrigger)
export default function About(){
  const ref=useRef(null)
  useEffect(()=>{
    const ctx=gsap.context(()=>{
      gsap.from('.ab-fl',{x:-45,opacity:0,duration:.85,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 78%'}})
      gsap.from('.ab-fr',{x:45,opacity:0,duration:.85,ease:'power3.out',delay:.1,scrollTrigger:{trigger:ref.current,start:'top 78%'}})
      gsap.from('.abr',{x:-18,opacity:0,stagger:.07,duration:.55,ease:'power2.out',scrollTrigger:{trigger:'.ab-tbl',start:'top 80%'}})
    })
    return()=>ctx.revert()
  },[])
  const rows=[['Location','Eastbourne, UK — Remote'],['Education','MSc Computing, De Montfort'],['Current','Datascope Systems Ltd'],['Status','Available for work',true],['Open to','Contract · Permanent · Freelance']]
  return(
    <div className="aband" id="about" ref={ref}>
      <div className="ab-in">
        <div className="ab-fl"><p className="ab-q">"I build systems businesses depend on daily — not prototypes that never ship."<strong>Senior Developer & Team Lead · Eastbourne, UK · Available Now</strong></p></div>
        <div className="ab-fr">
          <div className="ab-r"><p>I'm a Senior Full Stack Developer and Team Lead at <strong>Datascope Systems</strong>, leading 5 developers while staying hands-on across architecture, delivery, and code quality.</p><p>I specialise in <strong>booking platforms</strong>, <strong>Stripe payment systems</strong>, <strong>SaaS applications</strong>, and <strong>real-time dashboards</strong>. Production code, real clients.</p></div>
          <div className="ab-tbl">{rows.map(([k,v,g])=><div className="abr" key={k}><span className="abk">{k}</span><span className={'abv' + (g ? ' av' : '')}>{v}</span></div>)}</div>
        </div>
      </div>
    </div>
  )
}


import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data/portfolio'
import './Skills.css'
gsap.registerPlugin(ScrollTrigger)
export default function Skills(){
  useEffect(()=>{
    const ctx=gsap.context(()=>{gsap.from('.sg',{y:25,opacity:0,stagger:.1,duration:.65,ease:'power3.out',scrollTrigger:{trigger:'.sk-grid',start:'top 85%'}})})
    return()=>ctx.revert()
  },[])
  return(
    <section className="ssec" id="skills">
      <div><div className="se">Capabilities</div><h2 className="sh">Technical<br/><em>expertise.</em></h2></div>
      <div className="sk-grid">
        {skills.map(sg=>(
          <div className="sg" key={sg.category}>
            <div className="sgh">{sg.category}</div>
            {sg.items.map(item=><div className="ski" key={item}>{item}</div>)}
          </div>
        ))}
      </div>
    </section>
  )
}

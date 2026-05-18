import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/portfolio'
import './Projects.css'
gsap.registerPlugin(ScrollTrigger)
export default function Projects(){
  const trackRef=useRef(null)
  const pinRef=useRef(null)
  useEffect(()=>{
    if(window.innerWidth<=768)return
    const ctx=gsap.context(()=>{
      const track=trackRef.current
      if(!track)return
      gsap.to(track,{x:()=>-(track.scrollWidth-document.documentElement.clientWidth+window.innerWidth*.1),ease:'none',scrollTrigger:{trigger:pinRef.current,start:'top top',end:()=>'+='+(track.scrollWidth-document.documentElement.clientWidth+window.innerWidth*.1),pin:true,scrub:1,anticipatePin:1,invalidateOnRefresh:true}})
      gsap.from('.pcard',{y:40,opacity:0,stagger:.1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:pinRef.current,start:'top 80%'}})
    })
    return()=>ctx.revert()
  },[])
  const tilt=(e,el)=>{const r=el.getBoundingClientRect();gsap.to(el,{rotationY:(e.clientX-r.left-r.width/2)/r.width*10,rotationX:-(e.clientY-r.top-r.height/2)/r.height*5,transformPerspective:800,ease:'power1.out',duration:.4})}
  const unTilt=(el)=>gsap.to(el,{rotationY:0,rotationX:0,duration:.6,ease:'power2.out'})
  return(
    <div className="ppin" id="projects" ref={pinRef}>
      <div className="ppin-head"><div><div className="se">Selected Work</div><h2 className="sh">Production systems,<br/><em>not demos.</em></h2></div><div className="ppin-count">04 projects →</div></div>
      <div className="ptrack" ref={trackRef}>
        {projects.map(p=>(
          <div key={p.num} className={'pcard' + (p.featured ? ' pfeat' : '')} onMouseMove={e=>tilt(e,e.currentTarget)} onMouseLeave={e=>unTilt(e.currentTarget)}>
            <div className="pc-top"><div className="pc-num">{p.num}{p.featured?' / FEATURED':''}</div><h3 className="pc-name">{p.name}</h3><p className="pc-desc">{p.desc}</p></div>
            <div className="pc-code">{p.code.map((line,i)=>line.type==='comment'?<div key={i} className="pc-code-line"><span className="cc">{line.text}</span></div>:<div key={i} className="pc-code-line">{line.parts.map((pt,j)=><span key={j} className={pt.c}>{pt.t}</span>)}</div>)}</div>
            <div className="pc-foot">{p.chips.map(c=><span key={c} className={'pch' + (p.hiChips.includes(c) ? ' hi' : '')}>{c}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

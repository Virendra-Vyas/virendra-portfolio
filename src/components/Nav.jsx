import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './Nav.css'
const links=[{href:'#projects',label:'Work'},{href:'#experience',label:'Experience'},{href:'#skills',label:'Skills'},{href:'#blog',label:'Blog'},{href:'#contact',label:'Contact'}]
export default function Nav() {
  const [scrolled,setScrolled]=useState(false)
  const [active,setActive]=useState('')
  useEffect(()=>{
    const onScroll=()=>{setScrolled(window.scrollY>50);const bar=document.getElementById('bar');if(bar)bar.style.width=Math.min((window.scrollY/(document.body.scrollHeight-window.innerHeight))*100,100)+'%';const ss=['projects','experience','skills','blog','contact'];let cur='';ss.forEach(id=>{const el=document.getElementById(id);if(el&&window.scrollY>=el.offsetTop-120)cur=id});setActive(cur)}
    window.addEventListener('scroll',onScroll,{passive:true})
    return()=>window.removeEventListener('scroll',onScroll)
  },[])
  const go=(e,href)=>{e.preventDefault();document.querySelector(href)?.scrollIntoView({behavior:'smooth'})}
  const mag=(e)=>{const el=e.currentTarget;const r=el.getBoundingClientRect();gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.3,duration:.4,ease:'power2.out'})}
  const unMag=(e)=>gsap.to(e.currentTarget,{x:0,y:0,duration:.7,ease:'elastic.out(1,.5)'})
  return(
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="nav-logo">Virendra Vyas</div>
      <div className="nav-links">
        {links.map(l=><a key={l.href} href={l.href} onClick={e=>go(e,l.href)} className={active===l.href.slice(1)?'act':''}>{l.label}</a>)}
        <a href="#contact" className="nav-hire" onClick={e=>go(e,'#contact')} onMouseMove={mag} onMouseLeave={unMag}><span>Hire Me</span></a>
      </div>
    </nav>
  )
}

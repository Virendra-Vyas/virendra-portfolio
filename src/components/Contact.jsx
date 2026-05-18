import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'
gsap.registerPlugin(ScrollTrigger)
const links=[{label:'Email',value:'virendra1629@gmail.com',href:'mailto:virendra1629@gmail.com'},{label:'LinkedIn',value:'linkedin.com/in/virendra-vyas',href:'https://linkedin.com/in/virendra-vyas'},{label:'GitHub',value:'github.com/Virendra-Vyas',href:'https://github.com/Virendra-Vyas'},{label:'Upwork',value:'Senior Full Stack Developer',href:'https://www.upwork.com/freelancers/~010c7269d7c60b8fec'}]
export default function Contact(){
  const ref=useRef(null)
  const [sent,setSent]=useState(false)
  useEffect(()=>{
    const ctx=gsap.context(()=>{
      gsap.from('.c-fl',{x:-45,opacity:0,duration:.85,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 78%'}})
      gsap.from('.c-fr',{x:45,opacity:0,duration:.85,ease:'power3.out',delay:.1,scrollTrigger:{trigger:ref.current,start:'top 78%'}})
    })
    return()=>ctx.revert()
  },[])
  const mag=(e)=>{const el=e.currentTarget;const r=el.getBoundingClientRect();gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.28,y:(e.clientY-r.top-r.height/2)*.28,duration:.4,ease:'power2.out'})}
  const unMag=(e)=>gsap.to(e.currentTarget,{x:0,y:0,duration:.7,ease:'elastic.out(1,.5)'})
  const submit=(e)=>{e.preventDefault();setSent(true);setTimeout(()=>{setSent(false);e.target.reset()},4000)}
  return(
    <div className="csec" id="contact" ref={ref}>
      <div className="cgrid">
        <div className="c-fl">
          <h2 className="ch">Let's build<br/><em>something</em><br/>together.</h2>
          <p className="cn">Open to freelance projects, UK contract roles, and permanent positions. If you need someone who ships — let's talk.</p>
          <div className="clinks">
            {links.map(l=><a key={l.label} href={l.href} className="cl" target={l.href.startsWith('http')?'_blank':undefined} rel="noreferrer" onMouseMove={mag} onMouseLeave={unMag}><span><span className="cll">{l.label}</span>{l.value}</span><span className="cla">→</span></a>)}
          </div>
        </div>
        <div className="c-fr">
          <form className="cform" onSubmit={submit}>
            <div className="cf2"><div className="cfg"><label>Name</label><input type="text" placeholder="Your name" required/></div><div className="cfg"><label>Email</label><input type="email" placeholder="your@email.com" required/></div></div>
            <div className="cfg"><label>Enquiry type</label><select><option value="">Select...</option><option>Booking System</option><option>Stripe Integration</option><option>Full Stack SaaS</option><option>API Integration</option><option>Permanent Role</option><option>Contract Role</option><option>Other</option></select></div>
            <div className="cfg"><label>Message</label><textarea placeholder="Tell me about your project..."/></div>
            <button type="submit" className="csub" onMouseMove={mag} onMouseLeave={unMag}><span>{sent?'Enquiry Sent ✓':'Send Enquiry'}</span></button>
          </form>
        </div>
      </div>
    </div>
  )
}

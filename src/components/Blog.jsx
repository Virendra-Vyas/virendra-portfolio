import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { blogPosts } from '../data/portfolio'
import './Blog.css'
gsap.registerPlugin(ScrollTrigger)
export default function Blog(){
  useEffect(()=>{
    const ctx=gsap.context(()=>{gsap.from('.bcard',{y:35,opacity:0,stagger:.12,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'.bgrid',start:'top 85%'}})})
    return()=>ctx.revert()
  },[])
  return(
    <section className="bsec" id="blog">
      <div><div className="se">Writing</div><h2 className="sh">Technical<br/><em>articles.</em></h2></div>
      <div className="bgrid">
        {blogPosts.map(post=>(
          <a href={post.url} key={post.id} className="bcard" target="_blank" rel="noreferrer">
            <div className="bc-top">
              <div className="bc-meta"><span className="bc-date">{post.date}</span><span className="bc-read">{post.readTime}</span></div>
              <h3 className="bc-title">{post.title}</h3>
              <p className="bc-excerpt">{post.excerpt}</p>
            </div>
            <div className="bc-foot">
              {post.tags.map(t=><span key={t} className="bc-tag">{t}</span>)}
              <span className="bc-arr">→</span>
            </div>
          </a>
        ))}
      </div>
      <div className="blog-note">Articles coming soon — follow on <a href="https://linkedin.com/in/virendra-vyas" target="_blank" rel="noreferrer">LinkedIn</a> for updates.</div>
    </section>
  )
}

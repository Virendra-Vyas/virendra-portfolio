import { techStack } from '../data/portfolio'
import './MarqueeBand.css'
export default function MarqueeBand(){
  const hi=new Set(['.NET 7/8','Stripe','Azure','PostgreSQL','HMRC APIs','Entity Framework','Team Lead'])
  const items=[...techStack,...techStack]
  return(<div className="mq"><div className="mq-track">{[...items,...items].map((t,i)=><span key={i} className={hi.has(t)?'hi':''}>{t}</span>)}</div></div>)
}

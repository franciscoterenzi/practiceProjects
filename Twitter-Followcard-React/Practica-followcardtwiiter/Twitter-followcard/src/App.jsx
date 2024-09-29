import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App() {
    
    return (
        <>
        <section className='App'>
        <TwitterFollowCard userName="goncy">
            Gonzalo Pozzo
        </TwitterFollowCard> 
            
        
        <TwitterFollowCard initialIsFollowing={true} userName="franciscoterenzi">
            Francisco Terenzi
        </TwitterFollowCard>
        
        <TwitterFollowCard userName="mdo" >
            Mark Otto
        </TwitterFollowCard>
        
        </section>
        </>
)
}
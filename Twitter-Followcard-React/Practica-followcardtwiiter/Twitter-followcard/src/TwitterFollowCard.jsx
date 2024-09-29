    
    import { useState } from "react"

    export function TwitterFollowCard({children, userName, initialIsFollowing}){
        
        const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

        const follow = isFollowing ? 'Siguiendo': 'Seguir'
        const buttonClassName = isFollowing
            ? 'tw-followcard-button is-following'
            : 'tw-followcard-button '

        const handleClick = () => {
            setIsFollowing(!isFollowing)
        }

    return (    
    
    <article className='tw-follow-card'>
        <header className='tw-follow-card-header'>
            < img 
            className='tw-follow-card-avatar'
            alt= {`el avatar de ${userName}`} 
            src= {`https://unavatar.io/github/${userName}`}/>
            <div className= 'tw-follow-card-info'>
                <strong>{children}</strong>
                <span className='tw-follow-card-infoUserName' >@{userName}</span>
        </div>       
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick} >
                <span className="tw-followcard-buttonText">{follow}</span>
                <span className="tw-followcard-unfollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
)
}
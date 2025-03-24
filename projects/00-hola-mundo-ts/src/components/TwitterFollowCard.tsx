
interface TwitterFollowCardProps {
    userName: string;
    name: string;
    isFollowing?: boolean;
}


 function TwitterFollowCard({userName, name, isFollowing }: TwitterFollowCardProps) {
        return(
    <article className='tw-follow-card'>
        <header className='tw-follow-card-header'>
            <img className='tw-follow-card-avatar'
                src={`https://unavatar.io/${userName}`} 
                alt="avatar " />
            <div className='tw-follow-card-info'><strong>{name}</strong>
                <span className='tw-follow-card-infoUserName'>{userName}</span>
            </div>
        </header>
                <aside>
                    <button className='tw-follow-card-button'>
                        {isFollowing ? 'Siguiendo' : 'Seguir'}
                    </button>
                </aside>
    </article>
        )
}
export default TwitterFollowCard
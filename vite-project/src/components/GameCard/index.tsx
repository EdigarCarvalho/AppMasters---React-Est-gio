import { StyledGameCard } from "./style"

export interface GameCardInterface{
    id: number
    title: string
    thumbnail: string
    short_description: string
    game_url: string
    genre: string
    platform: string
    publisher: string
    developer: string
    release_date: string
    freetogame_profile_url: string
}

export function GameCard( props : GameCardInterface){
    const { thumbnail, title, developer, short_description, genre, game_url } = props;
    
    return (
        <StyledGameCard>
            <img src={thumbnail} alt="" />
            <h2>{title}</h2>
            <p>- {developer} -</p>
            {/* <hr/>
            <h4>{short_description}</h4>
            <h4>Gender: {genre}</h4>
            <a href={game_url}>Play Now</a> */}
        </StyledGameCard>
    );
}


  
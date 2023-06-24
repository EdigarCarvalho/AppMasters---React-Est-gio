import { GameCard, GameCardInterface } from "../GameCard";
import { GameCardCollectionStyled } from "./style";

interface CollectionProps {
    data: GameCardInterface[]
}

function GameCardCollection({data} : CollectionProps){
    
    return (
        <GameCardCollectionStyled>
         {data.map((game) => <GameCard {...game}/>)}
        </GameCardCollectionStyled>
    );
}

export default GameCardCollection;
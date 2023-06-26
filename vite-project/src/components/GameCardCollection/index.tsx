import { GameCard, GameCardInterface } from "../GameCard";
import { CollectionProps, setGamesCollection } from "./setGamesCollection";
import { GameCardCollectionStyled } from "./style";

function GameCardCollection( propsInfo : CollectionProps){

    const gamesCollection:GameCardInterface[] = setGamesCollection(propsInfo);

    return (
        <GameCardCollectionStyled>
         {gamesCollection.map((game) => <GameCard key={game.id} {...game}/>)}
        </GameCardCollectionStyled>
    );
}

export default GameCardCollection;
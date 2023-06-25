import { GameCard, GameCardInterface } from "../GameCard";
import { CollectionProps, setGamesCollection } from "./setGamesCollection";
import { GameCardCollectionStyled } from "./style";

function GameCardCollection( propsInfo : CollectionProps){

    const gamesCollection:GameCardInterface[] = setGamesCollection(propsInfo);

    return (
        <GameCardCollectionStyled>
         {gamesCollection.map((game) => <GameCard {...game}/>)}
        </GameCardCollectionStyled>
    );
}

export default GameCardCollection;
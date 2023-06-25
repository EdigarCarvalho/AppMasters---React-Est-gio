//GameCardCollection.tsx
import { GameCard, GameCardInterface } from "../GameCard";
import { GameCardCollectionStyled } from "./style";

interface CollectionProps {
    searchStringValue: string;
    data: GameCardInterface[];
}

function GameCardCollection({ searchStringValue,data} : CollectionProps){

    let gamesCollection:GameCardInterface[] = [];

    if(searchStringValue !== ""){
        data.filter((game) => {
            if(game.title.toLowerCase()
                   .includes(
                    searchStringValue.toLowerCase())
                )
                gamesCollection.push(game);
        })
    }else{
        gamesCollection = data;
    }

    return (
        <GameCardCollectionStyled>
         {gamesCollection.map((game) => <GameCard {...game}/>)}
        </GameCardCollectionStyled>
    );
}

export default GameCardCollection;
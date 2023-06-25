import { GameCardInterface } from "../GameCard";

export interface CollectionProps {
    searchStringValue: string;
    genreValue: string;
    data: GameCardInterface[];
}

export function setGamesCollection({ data,searchStringValue,genreValue}: CollectionProps) {

    let gamesCollection: GameCardInterface[] = [];

    if (searchStringValue !== "" && genreValue !== "") {

        data.filter((game) => {
            if (
                game.title.toLowerCase().includes(searchStringValue.toLowerCase()) &&
                game.genre === genreValue
            )
                gamesCollection.push(game);
        });

    } else if (searchStringValue !== "") {

        data.filter((game) => {
            if (game.title.toLowerCase().includes(searchStringValue.toLowerCase()))
                gamesCollection.push(game);
        });

    } else if (genreValue !== "") {

        data.filter((game) => {
            if (game.genre === genreValue) gamesCollection.push(game);
        });

    } else {
        gamesCollection = data;
    }

    return gamesCollection;
}

import { GameCard, GameCardInterface } from "../GameCard";
import { CollectionProps, setGamesCollection } from "./setGamesCollection";
import { GameCardCollectionStyled } from "./style";
import { useEffect } from "react";
import { getDocs, query, where, collection, addDoc } from "firebase/firestore"; // Importe as funções necessárias do Firestore
import { db } from "../../config/firebase";

function GameCardCollection(propsInfo: CollectionProps) {
  const gamesCollection: GameCardInterface[] = setGamesCollection(propsInfo);

  const verificarEAdicionarJogos = async () => {
    const dbGames = collection(db, "games"); 

    for (const game of gamesCollection) {
      const q = query(dbGames, where("title", "==", game.title));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(dbGames, { title: game.title });
      }
    }
  };

  useEffect(() => {
    verificarEAdicionarJogos();
  });

  return (
    <GameCardCollectionStyled>
      {gamesCollection.map((game) => <GameCard key={game.id} {...game} />)}
    </GameCardCollectionStyled>
  );
}

export default GameCardCollection;

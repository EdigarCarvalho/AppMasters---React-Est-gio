// index.tsx
import { useState, useEffect } from 'react';
import { GameCard, GameCardInterface } from '../GameCard';
import { CollectionProps, updateGamesCollection } from './updateGamesCollection';
import { GameCardCollectionStyled } from './style';

function GameCardCollection(propsInfo: CollectionProps) {
  const [gamesCollection, setGamesCollection] = useState<GameCardInterface[]>([]);

  useEffect(() => {
    const fetchGamesCollection = async () => {
      const collection = await updateGamesCollection(propsInfo);
      setGamesCollection(collection);
    };
    fetchGamesCollection();
  }, [propsInfo]);

  return (
    <GameCardCollectionStyled>
      {gamesCollection.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </GameCardCollectionStyled>
  );
}

export default GameCardCollection;

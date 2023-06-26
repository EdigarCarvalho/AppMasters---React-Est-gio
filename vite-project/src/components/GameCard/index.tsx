import { useState } from "react";
import { StyledGameCard } from "./style";

export interface GameCardInterface {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}


export function GameCard(props: GameCardInterface) {
  const {
    thumbnail,
    title,
    developer,
    short_description,
    genre,
    game_url,
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
<StyledGameCard ishover={isHovered ? "true" : ""}>

      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="front-content">
          <img src={thumbnail} alt="" />
          <div className="normal-state">
            <h2>{title}</h2>
            <p>- {developer} -</p>
          </div>
        </div>
        <div className="back-content">
          <hr />
          <div className="space">
            <h3>"{short_description}"</h3>
            <h3>Genre: {genre}</h3>
            <a href={game_url}>Play Now</a>
          </div>
        </div>
      </div>
    </StyledGameCard>
  );
}
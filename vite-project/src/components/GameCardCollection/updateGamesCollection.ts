//setGamesCollection.ts
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { GameCardInterface } from "../GameCard";

export interface CollectionProps {
  searchStringValue: string;
  genreValue: string;
  data: GameCardInterface[];
  favoriteValue: boolean;
  ratingValue:number;
}

async function getFavoriteGames(): Promise<string[]>{
  try {
    if (auth.currentUser) {
      const uid = auth.currentUser.uid;
      const usersCollectionRef = collection(db, "users");
      const userDocRef = doc(usersCollectionRef, uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        if (userData?.favorites) {
          return userData.favorites.map((game: { title: string }) => game.title);
        }
      }
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getGamesFromRatings(){
  try {
    if (auth.currentUser) {
      const uid = auth.currentUser.uid;
      const ratingsCollectionRef = collection(db, "ratings");
      const querySnapshot = await getDocs(
        query(ratingsCollectionRef, where("uid", "==", uid))
      );

      const favoriteGames: { title: string; stars: number }[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        favoriteGames.push({ title: data.title, stars: data.stars });
      });

      return favoriteGames;
    }

    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}


export async function updateGamesCollection({
  data,
  searchStringValue,
  genreValue,
  favoriteValue,
  ratingValue
}: CollectionProps) {
    let gamesCollection: GameCardInterface[] = [];

    if(favoriteValue && searchStringValue !== "" && genreValue !== ""){
      const favoriteGameTitles = await getFavoriteGames();      

      data.filter((game) => {
          if(favoriteGameTitles.includes(game.title) &&
          game.title.toLowerCase().includes(searchStringValue.toLowerCase()) &&
          game.genre === genreValue)
              gamesCollection.push(game);
      });
    } else if (favoriteValue && searchStringValue !== "" ) {
      const favoriteGameTitles = await getFavoriteGames();      

      data.filter((game) => {
          if(favoriteGameTitles.includes(game.title) &&
          game.title.toLowerCase().includes(searchStringValue.toLowerCase()))
              gamesCollection.push(game);
      });

    } else if (favoriteValue && genreValue !== "" ) {
      const favoriteGameTitles = await getFavoriteGames();      

      data.filter((game) => {
          if(favoriteGameTitles.includes(game.title) &&
          game.genre === genreValue)
              gamesCollection.push(game);
      });

    } else if (searchStringValue !== "" && genreValue !== "") {
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
    } else if (favoriteValue){
      const favoriteGameTitles = await getFavoriteGames();
      
      data.filter((game) => {
          if(favoriteGameTitles.includes(game.title))
              gamesCollection.push(game);
      });
    }else if (ratingValue !== 0){
      const favoriteGames = await getGamesFromRatings();
      const filteredGames = data.filter((game) =>
        favoriteGames.some((favoriteGame) => favoriteGame.title === game.title)
      );
    
      const filteredAndSortedGames = filteredGames.map((game) => {
        const matchingFavoriteGame = favoriteGames.find((favoriteGame) => favoriteGame.title === game.title);
        return { ...game, stars: matchingFavoriteGame?.stars || 0 };
      });
    
      const sortedGames = filteredAndSortedGames.sort((a, b) => {
        if (ratingValue === 1) {
          return b.stars - a.stars; // Ordem decrescente de estrelas
        } else if (ratingValue === 2) {
          return a.stars - b.stars; // Ordem crescente de estrelas
        } else {
          return 0;
        }
      });
    
      return sortedGames;
    } else {
      gamesCollection = data;
    }

    return gamesCollection;
  
}

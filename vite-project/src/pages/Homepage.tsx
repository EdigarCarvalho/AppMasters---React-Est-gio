import { useState } from "react";
import { useTimeout } from "usehooks-ts";
import { UserMesage } from "../style";
import Filters from "../components/Filters";
import GameCardCollection from "../components/GameCardCollection";
import useFetch from "../hooks/useFetch";
import Header from "../components/Header";

interface ErrorType {
  response: {
    status: number;
  };
}

function Homepage() {
  const genres: string[] = [];
  const [searchStringValue, setSearchStringValue] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [timeError, setTimeError] = useState(false);

  useTimeout(() => {
    if (isLoading) setTimeError(true);
  }, 5000);

  const { data, isLoading, error, isError } = useFetch(
    "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data",
    {
      headers: {
        "dev-email-address": "edgar@gmail.com",
      },
    }
  );

  if (isError) {
    const Booli = [500, 502, 503, 504, 507, 508, 509].includes(
      (error as ErrorType).response.status
    );

    return (
      <UserMesage>
        {Booli ? (
          <h1>O servidor fahou em responder, tente recarregar a página</h1>
        ) : (
          <h1>
            O servidor não conseguirá responder por agora, tente voltar
            novamente mais tarde
          </h1>
        )}
      </UserMesage>
    );
  }

  if (isLoading || timeError) {
    if (timeError) {
      return (
        <UserMesage>
          <h1>O servidor demorou para responder, tente mais tarde</h1>
        </UserMesage>
      );
    }

    return (
      <UserMesage>
        <h1>Loading</h1>
      </UserMesage>
    );
  }

  data.filter((game) => {
    if (!genres.includes(game.genre)) genres.push(game.genre);
  });

  return (
    <>
      <Header />
      <Filters
        handleValueChange={setSearchStringValue}
        genres={genres}
        setGenreValue={setGenreValue}
      />
      <GameCardCollection
        searchStringValue={searchStringValue}
        genreValue={genreValue}
        data={data}
      />

    </>
  );
}

export default Homepage;

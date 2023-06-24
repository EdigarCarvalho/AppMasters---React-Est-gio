import { GameCard, GameCardInterface } from "./components/GameCard";
import useFetch from "./hooks/useFetch";



function App() {
	const { data, loading, error } = useFetch(
		"https://games-test-api-81e9fb0d564a.herokuapp.com/api/data",
		{
			headers: {
				"dev-email-address": "edgarcarvalho8989@gmail.com",
			},
		}
	);

	if (loading) return <h1>Loading</h1>;

	if (error) console.log(error);

	return (
    <>

      {Array.isArray(data) && (data.map((item: GameCardInterface) => <GameCard {...item}/>))}
    </>
  );
}

export default App;

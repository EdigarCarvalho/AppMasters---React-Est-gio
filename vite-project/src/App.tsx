import GameCardCollection from "./components/GameCardCollection";
import useFetch from "./hooks/useFetch";

const email = import.meta.env.VITE_API_EMAIL;

function App() {
	
	const { data , loading, error } = useFetch(
		"https://games-test-api-81e9fb0d564a.herokuapp.com/api/data",
		{
			headers: {
				"dev-email-address": email,
			},
		}
	);

	if (loading) return <h1>Loading</h1>;

	if (error) console.log(error);

	return (
    <>
      <GameCardCollection data={data}/>
    </>
  );
}

export default App;

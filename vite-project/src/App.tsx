import "./App.css";
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
      {Array.isArray(data) ? (
        data.map((item: any) => <div>{item.title}</div>)
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
}

export default App;

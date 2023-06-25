//App.tsx
import { useState } from "react";
import GameCardCollection from "./components/GameCardCollection";
import Header from "./components/Header";
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


	if (error) console.log(error);

	const[searchStringValue, setSearchStringValue] = useState(""); 

	return (
    <>
	  <Header handleValueChange={setSearchStringValue}/>
      <GameCardCollection searchStringValue={searchStringValue} data={data}/>
    </>
  );
}

export default App;

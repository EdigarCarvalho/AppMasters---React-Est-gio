import axios from "axios";
import { GameCardInterface } from "../components/GameCard";
import { useQuery } from "@tanstack/react-query";

interface FetchData {
    data: GameCardInterface[];
    isLoading: boolean;
    error: number|unknown;
    isError: boolean;
}

function useFetch(url: string, headers: object): FetchData {

    const {data , isLoading , error, isError } = useQuery( ["useFetch"], async () => {
        const {data} = await axios.get(url, headers);
        return data;
    }, {
        "refetchOnWindowFocus": false,
        "retry": false
    }); 

    return { data, isLoading, error , isError };
}

export default useFetch;
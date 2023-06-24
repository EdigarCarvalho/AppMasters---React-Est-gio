import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { GameCardInterface } from "../components/GameCard";

interface FetchData {
    data: GameCardInterface[];
    loading: boolean;
    error: object;
}

function useFetch(url: string, headers: object): FetchData {
    const [data, setData] = useState<GameCardInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<object>({});

    useEffect(() => {
        setLoading(true);

        axios
            .get(url, headers )
            .then((res: AxiosResponse) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
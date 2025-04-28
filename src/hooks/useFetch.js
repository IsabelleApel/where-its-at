import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
            .then(response => setData([...response.data.events]))
            .catch(error => setIsError(true))
            .finally(() => setIsLoading(false));
    },[url])

    return { data, isLoading, isError };
}
import { useCallback, useEffect, useState } from "react";
import {api} from '../utils/api'

export const useFetch = () => {
    const [data, setData] = useState(null)
    const [query, setQuery] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);


    const fetchData = useCallback(async () => {
        setData(null)
        setIsError(false)
        setIsLoading(true)
        try {
            if(query) {
              const {data: {data}} = await api.GraphQL(query)
              setData(Object.values(data)[0])
            }
        } catch (error) {
            setIsError({status: true, error})
            console.log(error);
        }
        setIsLoading(false)
    }, [query]) 
    
    useEffect(() => {
      fetchData()
    }, [query]);
    
  return [{data, isLoading, isError}, setQuery]
};


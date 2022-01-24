import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import {api} from 'utils/api'

export const useFetch = (toast = false) => {
    const [data, setData] = useState(null)
    const [query, setQuery] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);

    const Toast = useToast()


    const fetchData = useCallback(async () => {
        setData(null)
        setIsError(false)
        setIsLoading(true)
        try {
            if(query) {
              const {data: {data}} = await api.GraphQL(query)
              setData(Object.values(data)[0])
              toast && Toast({status: "success", title:"Operacion exitosa",isClosable:true})
            }
        } catch (error) {
            setIsError({status: true, error})
            toast && Toast({status: "error", title:"Error", description: JSON.stringify(error), isClosable:true})
            console.log(error);
        }
        setIsLoading(false)
    }, [query]) 
    
    useEffect(() => {
      fetchData()
    }, [query]);
    
  return [{data, isLoading, isError}, setQuery]
};


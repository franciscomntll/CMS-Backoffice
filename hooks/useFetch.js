import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { api } from "utils/api";

//query : {query, variables, type}
export const useFetch = (toast = false) => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const Toast = useToast();

  const fetchData = useCallback(async () => {
    setData(null);
    setIsError(false);
    setIsLoading(true);
    try {
      if (query) {
        if(query.type === "json"){
          const {
            data: { data },
          } = await api.GraphQL(query);
          setData(Object.values(data)[0]);
        } else if(query.type === "formData"){
          const formData = new FormData()
          const values = Object?.entries(query.variables)

          const map = values?.reduce((acc, item) => {
            if(item[1] instanceof File){
              acc[item[0]] = [`variables.${item[0]}`]
            }
            return acc
          }, {})

          formData.append("operations", JSON.stringify(query))
          formData.append("map", JSON.stringify(map))
          values.forEach(item => {
            if(item[1] instanceof File){
              console.log(item[0])
              console.log(item[1])
            formData.append(item[0], item[1])
            }
          })
          const data = await api.GraphQL(formData, {
            headers: {
              "Content-Type" : "multipart/form-data"
            }
          })
          console.log(data)
        }
        toast &&
          Toast({
            status: "success",
            title: "Operacion exitosa",
            isClosable: true,
          });
      }
    } catch (error) {
      setIsError({ status: true, error });
      toast &&
        Toast({
          status: "error",
          title: "Error",
          description: JSON.stringify(error),
          isClosable: true,
        });
      console.log(error);
    }
    setIsLoading(false);
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [query]);

  return [data, isLoading, isError, setQuery];
};

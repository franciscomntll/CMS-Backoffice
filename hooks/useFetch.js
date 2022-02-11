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
      // Verificar que tenga la query del endpoint
      if (query) {
        // Determinar si se usara json o form data

        //JSON
        if (query.type === "json") {
          const {
            data: { data },
          } = await api.GraphQL(query);
          setData(Object.values(data)[0]);

          //Form data
        } else if (query.type === "formData") {
          const formData = new FormData();
          const values = Object?.entries(query.variables);

          console.log(values);
          // Generar el map del Form Data para las imagenes
          const map = values?.reduce((acc, item) => {
            if (item[1] instanceof File) {
              acc[item[0]] = [`variables.${item[0]}`];
            }
            if (item[1] instanceof Object) {
              Object.entries(item[1]).forEach((el) => {
                if (el[1] instanceof File) {
                  acc[el[0]] = [`variables.${item[0]}.${el[0]}`];
                }
                if (el[1] instanceof Object) {
                  Object.entries(el[1]).forEach((elemento) => {
                    if (elemento[1] instanceof File) {
                      acc[elemento[0]] = [
                        `variables.${item[0]}.${el[0]}.${elemento[0]}`,
                      ];
                    }
                  });
                }
              });
            }
            return acc;
          }, {});

          // Agregar filas al FORM DATA

          formData.append("operations", JSON.stringify(query));
          formData.append("map", JSON.stringify(map));
          values.forEach((item) => {
            if (item[1] instanceof File) {
              formData.append(item[0], item[1]);
            }
            if (item[1] instanceof Object) {
              Object.entries(item[1]).forEach((el) => {
                if (el[1] instanceof File) {
                  formData.append(el[0], el[1]);
                }
                if (el[1] instanceof Object) {
                  Object.entries(el[1]).forEach((elemento) => {
                    if (elemento[1] instanceof File) {
                      formData.append(elemento[0], elemento[1]);
                    }
                  });
                }
              });
            }
          });

          const { data } = await api.GraphQL(formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          if (data.errors) {
            throw new Error(JSON.stringify(data.errors));
          }
        }
        toast &&
          Toast({
            status: "success",
            title: "Operacion exitosa",
            isClosable: true,
          });
      }
    } catch (error) {
      setIsError(true);
      toast &&
        Toast({
          status: "error",
          title: "Error",
          description: JSON.stringify(error),
          isClosable: true,
        });
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [query]);

  return [data, isLoading, isError, setQuery];
};

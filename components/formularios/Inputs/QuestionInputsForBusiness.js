import {
  Box,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { LoadingComponent } from "components/LoadingComponent";
import { FieldArray, useField } from "formik";
import { useFetch } from "hooks/useFetch";
import React, { useEffect } from "react";
import { FetchGraphQL } from "utils/Fetching";

const queryResults = `query ($id: [ID]){
    getQuestionsAndCharacteristics(_id: $id,){
      characteristics{
        _id
        title
      }
      questions{
        _id
        title
      }
    }
  }`;

const QuestionInputsForBusiness = ({ label, values, setValues, ...props }) => {
  const [field, meta, helpers] = useField(props);

  //Fetching de lista de subcategorias
  const [catBusiness, isError, isLoading, setQueryTabList] = useFetch();
  //Fetching de questions y characteristics
  const [results, isErrorResults, isLoadingResults, setQueryResults] =
    useFetch();

  // Al montar el componente traer las subcategorias para listar
  useEffect(() => {
    setQueryTabList({
      ...FetchGraphQL.subCatBusiness.getSubCategoryBusiness,
      variables: {},
      type: "json",
    });
  }, []);

  // Cada vez que cambie la seleccion de categorias solicitar preguntas y caracteristicas
  useEffect(() => {
    setQueryResults({
      query: queryResults,
      variables: { id: field.value },
      type: "json",
    });
  }, [field.value]);

  useEffect(() => {
    if (!isLoadingResults && !isErrorResults) {
      const idsQuestions = results?.questions?.map((item) => item._id);
      const questionsAndAnswers = [];
      // const filter = values?.questionsAndAnswers?.filter((item) => {
      //   return idsQuestions?.includes(item?.frequentQuestions);
      // });
      for (const key in values.questionsAndAnswers2) {
        if (idsQuestions?.includes(key)) {
          questionsAndAnswers.push(values.questionsAndAnswers2[key]);
        }
      }
      setValues({ ...values, questionsAndAnswers });
    }
  }, [results, isLoadingResults, isErrorResults, values.questionsAndAnswers2]);

  return (
    <Box w={"100%"}>
      <FieldArray
        name={props.name}
        render={({ push, remove, form }) => {
          return (
            <Box>
              <Divider />
              <FormLabel py={"1.5rem"} fontWeight={"900"} textAlign={"left"}>
                {label}
              </FormLabel>

              <Grid templateColumns={"repeat(3, 1fr)"} gap={"1rem"}>
                {!isError &&
                  !isLoading &&
                  catBusiness?.results
                    ?.filter((item) => item && item)
                    ?.map((item) => {
                      return (
                        <Checkbox
                          key={item?._id}
                          size={"sm"}
                          variant={""}
                          isChecked={form?.values[props?.name]?.includes(
                            item._id
                          )}
                          textTransform={"capitalize"}
                          onChange={(e) => {
                            const idx =
                              form?.values[props?.name]?.length > 0 &&
                              form.values[props.name].findIndex(
                                (el) => el === item._id
                              );
                            e.currentTarget.checked
                              ? push(item._id)
                              : remove(idx);
                          }}
                        >
                          {item?.title}
                        </Checkbox>
                      );
                    })}
              </Grid>
            </Box>
          );
        }}
      />
      {meta.touched && meta.error && (
        <Text color={"red"} fontSize={"xs"}>
          {meta.error}
        </Text>
      )}
      <Flex w={"100%"} flexDir={"column"} py={"1.5rem"}>
        <Divider />
        <FormLabel py={"1.5rem"} fontWeight={"900"} textAlign={"left"}>
          Preguntas frecuentes
        </FormLabel>
        {!isLoadingResults && !isErrorResults ? (
          <QuestionsComponent data={results?.questions} />
        ) : (
          <LoadingComponent />
        )}
      </Flex>
      <Flex w={"100%"} flexDir={"column"} py={"1.5rem"}>
        <Divider />
        <FormLabel py={"1.5rem"} fontWeight={"900"} textAlign={"left"}>
          Caracteristicas
        </FormLabel>
        {!isLoadingResults && !isErrorResults ? (
          <CharactesticsComponent name={"characteristics"} data={results?.characteristics} />
        ) : (
          <LoadingComponent />
        )}
      </Flex>
    </Box>
  );
};

export default QuestionInputsForBusiness;

const QuestionsComponent = ({ data = [] }) => {
  useEffect(() => {}, [data]);

  return (
    <>
      {data.length > 0 ? (
        <>
          {data?.map((item, idx) => (
            <InputQuestions
              key={item._id}
              label={item.title}
              name={`questionsAndAnswers2.${item._id}`}
              question={item._id}
            />
          ))}
        </>
      ) : (
        <Text
          fontSize={"sm"}
          textAlign={"center"}
          color={"gray.400"}
          py={"4rem"}
        >
         Debes seleccionar una categoria que contenga items
        </Text>
      )}
    </>
  );
};

const InputQuestions = ({ label, question, ...props }) => {
  const [field, meta, { setValue }] = useField(props);

  return (
    <Box>
      <FormLabel fontSize={"sm"}>{label}</FormLabel>
      <Input
        variant={"filled"}
        fontSize={"sm"}
        {...field}
        {...props}
        value={field?.value?.answers}
        onChange={(e) =>
          setValue({ frequentQuestions: question, answers: e.target.value })
        }
      />
      {meta.touched && meta.error && (
        <Text color={"red"} fontSize={"xs"}>
          {meta.error}
        </Text>
      )}
    </Box>
  );
};

const CharactesticsComponent = ({data, ...props}) => {
  return (
    <FieldArray
        name={"characteristics"}
        render={({ push, remove, form }) => {
          return (
              <Grid templateColumns={"repeat(3, 1fr)"} gap={"1rem"}>
                {data.length > 0 ? (
                  <>
                  {data
                    ?.filter((item) => item && item)
                    ?.map((item) => {
                      return (
                        <Checkbox
                          key={item?._id}
                          size={"sm"}
                          variant={""}
                          isChecked={form?.values[props?.name]?.includes(
                            item._id
                          )}
                          textTransform={"capitalize"}
                          onChange={(e) => {
                            const idx =
                              form?.values[props?.name]?.length > 0 &&
                              form.values[props.name].findIndex(
                                (el) => el === item._id
                              );
                            e.currentTarget.checked
                              ? push(item._id)
                              : remove(idx);
                          }}
                        >
                          {item?.title}
                        </Checkbox>
                      );
                    })}
                  </>
                ) : (
                  <GridItem colSpan={[3]}>
                  <Text
          fontSize={"sm"}
          textAlign={"center"}
          color={"gray.400"}
          w={"100%"}
          py={"4rem"}
        >
          Debes seleccionar una categoria que contenga items
        </Text>
        </GridItem>
                )}
              </Grid>
          );
        }}
      />
  )
};

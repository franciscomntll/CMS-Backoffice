import {
    Box,
    Checkbox,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { FieldArray, useField } from "formik";
  import { useFetch } from "hooks/useFetch";
  import React, { useEffect } from "react";
  import {FetchGraphQL} from 'utils/Fetching';
  
  
  const QuestionInputsForBusiness = ({ label, tabList = {}, ...props }) => {
    const [field, meta, helpers] = useField(props);
    const [catBusiness, isError, isLoading, setQueryTabList] = useFetch();
  
    useEffect(() => {
      setQueryTabList({ ...FetchGraphQL.subCatBusiness.getSubCategoryBusiness, variables: {}, type: "json" });
    }, []);
  
    
    return (
      <Box w={"100%"}>
        <FieldArray
          name={props.name}
          render={({push, remove, form}) => {
          return (
            <>
              <FormLabel fontSize={"sm"}>{label}</FormLabel>
              <RadioGroup
                w={"100%"}
                p={"0.5rem"}
                rounded={"lg"}
                maxH={"10rem"}
                overflow={"auto"}
              >
                <Stack direction="column" fontSize={"xs"}>
                  {!isError &&
                    !isLoading &&
                    dataTabList?.results
                      ?.filter((item) => item && item)
                      ?.map((item) => {
                        return (
                          <Checkbox key={item?._id} size={"sm"} variant={""} isChecked={form?.values[props?.name]?.includes(item._id)} textTransform={"capitalize"}  onChange={(e) => {
                            const idx = form?.values[props?.name]?.length > 0 && form.values[props.name].findIndex(el =>  el === item._id)
                            e.currentTarget.checked ? push(item._id) : remove(idx)
                          }}>
                            {item?.title}
                          </Checkbox>
                        )
                      })}
                </Stack>
              </RadioGroup>
            </>
          )}}
        />
        {meta.touched && meta.error && (
                <Text color={"red"} fontSize={"xs"}>
                  {meta.error}
                </Text>
              )}
      </Box>
    );
  };
  
  export default QuestionsInputs;
  
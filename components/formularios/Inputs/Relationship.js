import {
  Box,
  Checkbox,
  Divider,
  FormLabel,
  Grid,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FieldArray, useField } from "formik";
import { useFetch } from "hooks/useFetch";
import { useEffect, memo } from "react";

const Relationship = memo(({ label, tabList = {}, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [dataTabList, isError, isLoading, setQueryTabList] = useFetch();

  useEffect(() => {
    setQueryTabList({ ...tabList, variables: {}, type: "json" });
  }, []);

  useEffect(() => {
    field?.value?.length > 0 && field?.value[0] instanceof Object && helpers?.setValue(field?.value?.map(item => item?._id))
  }, []);
  
  return (
    <Box w={"100%"}>
      <FieldArray
        name={props.name}
        render={({push, remove, form}) => {
        return (
          <>
             <Divider />
    <FormLabel paddingTop={"1rem"} fontWeight={"900"} textAlign={"left"} fontSize={"sm"}>{label}</FormLabel>
            <RadioGroup
              w={"100%"}
              p={"0.5rem"}
              rounded={"lg"}
              // maxH={"10rem"}
              // overflow={"visible"}
            >
              <Grid templateColumns={"repeat(3, 1fr)"} gap={"1rem"}>
                {!isError &&
                  !isLoading &&
                  dataTabList?.results
                    ?.filter((item) => item && item)
                    ?.sort((a,b) => a.title.localeCompare(b.title))
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
              </Grid>
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
});

export default Relationship;

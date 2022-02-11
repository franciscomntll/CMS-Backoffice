import { Box, Divider, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

export const InputNumberField = ({label, ...props}) => {
    const [field, meta, helpers] = useField({...props});
    const parse = (val) => val.replace(/^\$/, '')
  return (
    <Box>
      <Divider />
    <FormLabel paddingTop={"1rem"} fontWeight={"900"} textAlign={"left"} fontSize={"sm"}>{label}</FormLabel>
    <NumberInput variant={"filled"}  {...field} {...props} onChange={(e) => helpers.setValue(parse(e))} value={field.value ?? undefined}  >
      <NumberInputField fontSize={"sm"} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </Box>
  )
};

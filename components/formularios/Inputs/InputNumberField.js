import { Box, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

export const InputNumberField = ({label, ...props}) => {
    const [field, meta, helpers] = useField({...props});
    const parse = (val) => val.replace(/^\$/, '')
  return (
    <Box>
    <FormLabel fontSize={"sm"}>{label}</FormLabel>
    <NumberInput  {...field} {...props} onChange={(e) => helpers.setValue(parse(e))} value={field.value}  >
      <NumberInputField fontSize={"sm"} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </Box>
  )
};

import { Box, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

const InputNumberField = ({label, ...props}) => {
    const [field, meta, helpers] = useField({...props});
    const parse = (val) => val.replace(/^\$/, '')
  return (
    <Box>
    <FormLabel>{label}</FormLabel>
    <NumberInput  {...field} {...props} onChange={(e) => helpers.setValue(parse(e))} value={field.value}  >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </Box>
  )
};

export default InputNumberField;

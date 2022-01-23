import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';

const LoadingComponent = () => {
  return (
    <Flex
    alignItems={"center"}
    w={"100%"}
    gap={"0.5rem"}
    justifyContent={"center"}
    p={"2rem"}
  >
    <Spinner size={"md"} />
    <Text>Cargando</Text>
  </Flex>)
};

export default LoadingComponent;

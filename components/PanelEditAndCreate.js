import { Badge, Box, Button, Divider, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import FormDinamical from './Forms/Form';

const PanelEditAndCreate = ({slug, setAction}) => {
    const Information = [
        {title:"Ultima Actualización", value: "14/12/2022"},
        {title:"Creado por", value: "Francisco Montilla"}
    ]
  return (
    <Grid  templateColumns={["repeat(1, 1fr)", , , , "repeat(5, 1fr)"]} gap={"2rem"}>
        <GridItem colSpan={["1",,,, "4"]} bg={"white"} p={"1rem"} shadow={"sm"} rounded={"xl"}>
    <Button onClick={() => setAction({type: "VIEW", payload:{}})}>Atras</Button>
    <FormDinamical schema={slug}/>

        </GridItem>
        <GridItem colSpan={"1"} bg={"white"} p={"1rem"} shadow={"sm"} rounded={"xl"} h={"fit-content"}>
                <Heading pb={"1rem"} fontSize={"sm"} color={"gray.500"}>Información</Heading>
                <Divider  />
                {Information?.map((item,idx) => (
                <Flex key={idx} pt={"1rem"} w={"100%"} alignItems={"center"} justifyContent={'space-between'} fontSize={"xs"}>
                    <Text color={"gray.400"}>{item.title}</Text>
                    <Badge color={"gray.700"} p={"0.25rem"}>{item.value}</Badge>
                </Flex>

                ))}
        </GridItem>
    </Grid>
  )
};

export default PanelEditAndCreate;

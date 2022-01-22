import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { Action } from '../../pages/[slug]';

const ActionsCell = ({setAction}) => {
    const fetchData= () => {
        return {name: "hola" , lastname: "mundo"}
    }
  return (
    <Flex alignItems={"center"} gap={"0.5rem"}>
       <IconButton  icon={<ViewIcon/>}/>
       <IconButton onClick={() => setAction({type: "EDIT", payload: {}})}  icon={<EditIcon/>}/>
       <IconButton  icon={<DeleteIcon/>}/>
    </Flex>
  )
};

export default ActionsCell;

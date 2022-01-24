import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React from 'react';

export const ActionsCell = (props) => {
  const {setAction, row} = props
  return (
    <Flex alignItems={"center"} gap={"0.5rem"}>
       <IconButton size={"sm"} icon={<ViewIcon/>}/>
       <IconButton size={"sm"} onClick={() => setAction({type: "EDIT", payload: {_id : row.original._id}})}  icon={<EditIcon/>}/>
       <IconButton size={"sm"} icon={<DeleteIcon/>}/>
    </Flex>
  )
};


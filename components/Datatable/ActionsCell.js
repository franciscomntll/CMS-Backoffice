import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import React from 'react';

export const ActionsCell = (props) => {
  const {setAction, row, handleRemoveItem, ...rest} = props
  return (
    <Flex alignItems={"center"} gap={"0.5rem"}>
       {/* <IconButton size={"sm"} icon={<ViewIcon/>}/> */}
       <Tooltip label='Editar'>
       <IconButton size={"sm"} onClick={() => setAction({type: "EDIT", payload: {_id : row.original._id}})}  icon={<EditIcon/>}/>
       </Tooltip>
       <Tooltip label='Eliminar'>
       <IconButton size={"sm"} onClick={() => handleRemoveItem(row.original._id)} icon={<DeleteIcon/>}/>
       </Tooltip>
    </Flex>
  )
};


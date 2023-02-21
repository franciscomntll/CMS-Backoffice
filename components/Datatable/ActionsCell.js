import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import React from 'react';

export const ActionsCell = ({ id, handleRemoveItem }) => {

  return (
    <Flex alignItems={"center"} gap={"0.5rem"}>
      <Tooltip label='Eliminar'>
        <IconButton size={"sm"} onClick={() => handleRemoveItem(id)} icon={<DeleteIcon />} />
      </Tooltip>
    </Flex>
  )
};


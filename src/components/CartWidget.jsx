import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'

const CartWidget = () => {
  return (
    <Flex>
      <Box>
        <AddIcon />
      </Box>
      <Spacer/>
      <Box>
        <p>{'/ItemCount/${counter}'}</p>
      </Box>  
    </Flex>
  )
}

export default CartWidget
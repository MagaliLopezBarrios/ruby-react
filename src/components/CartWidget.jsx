import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <Flex>
      <Box>
        <AddIcon />
      </Box>
      <Spacer/>
      <Box>
        <p>5</p>
      </Box>  
    </Flex>
  )
}

export default CartWidget
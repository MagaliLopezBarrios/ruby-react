import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <Flex>
      <Box p='4' bg='black.400'>
        Ruby Canali
      </Box>
      <Spacer/> 
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>Cuadros</MenuItem>
            <MenuItem>Murales</MenuItem>
            <MenuItem>Art on clothes</MenuItem>
          </MenuList>
        </Menu>
        <Box>
        <Spacer/> 
        <CartWidget />
        </Box>
      
    </Flex>
  )
}

export default NavBar
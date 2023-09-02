import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
//import brand from '../assets/carrito'


const NavBar = () => {
  return (
    <Flex>
      <Box p='4' >
        <Link to= {"/"}>
        <img src="{brand}" alt="" width='100px'height='100px' />
        </Link>
      </Box>
      <Spacer/> 
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>
            <Link to={'/categoria/${cuadro}'}>
            Cuadros
            </Link>
            </MenuItem>

            <MenuItem>
            <Link to= {'/categoria/${mural}'}>
            Murales
            </Link>
            </MenuItem>

            <MenuItem>
            <Link to= {'/categoria/${clothes}'}>
            Art on clothes
            </Link>
            </MenuItem>

          </MenuList>
        </Menu>
      </Box>
      <Spacer/> 

      <Box>
        <Link to={"/cart"}>
        <CartWidget />
        </Link>
      </Box>
      
    </Flex>
  )
}

export default NavBar
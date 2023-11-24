import React from "react";
import CartWidget from "./CartWidget";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem, Text, Link, HStack } from "@chakra-ui/react";
import { FaHome, FaTag, FaInfoCircle, FaPhone, } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Flex as="nav" padding={4} bgColor="teal.500" color="white" alignItems="center">
      <Link as={RouterLink} to="/" _hover={{ textDecor: 'none' }}>
        <HStack spacing={2}>
          <FaHome />
          <Text fontSize="xl" fontWeight="bold">AMETRINA</Text>
        </HStack>
      </Link>
      <Spacer />
      <HStack spacing={6}>
        <Menu>
          <MenuButton as="Button" rightIcon={<FaTag />} variant="ghost" colorScheme="teal" >
            Categorías
          </MenuButton>
          <MenuList bgColor="gray.700">
            <MenuItem as={RouterLink} to="/categoria/Carteras" color="teal.500">Carteras</MenuItem>
            <MenuItem as={RouterLink} to="/categoria/Ceramicas" color="teal.500">Cerámicas</MenuItem>
            <MenuItem as={RouterLink} to="/categoria/Blanqueria" color="teal.500">Blanquería</MenuItem>
          </MenuList>
        </Menu>
        <Link as={RouterLink} to="/about" _hover={{ textDecor: 'none' }}>
          <HStack spacing={2}>
            <FaInfoCircle />
            <Text>About</Text>
          </HStack>
        </Link>
        <Link as={RouterLink} to="/contacto" _hover={{ textDecor: 'none' }}>
          <HStack spacing={2}>
            <FaPhone />
            <Text>Contacto</Text>
          </HStack>
        </Link>
      </HStack>
      <Spacer />
      <Box p="2">
        <Link as={RouterLink} to="/cart" _hover={{ textDecor: 'none' }}>
          
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;

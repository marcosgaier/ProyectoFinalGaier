import React from "react";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex as="nav" padding={4} boxShadow="md" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">
        AMETRINA
      </Text>
      <Spacer />
      <Menu>
        <MenuButton>Categorias</MenuButton>
        <MenuList opacity={0} _open={{ opacity: 1 }} transition="opacity 0.2s">
          <MenuItem _hover={{ backgroundColor: "gray.200", color: "blue.500" }}>
            Inicio
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.200", color: "blue.500" }}>
            Productos
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.200", color: "blue.500" }}>
            Tienda
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.200", color: "blue.500" }}>
            Contacto
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Box p="4">
        <CartWidget />
      </Box>
    </Flex>
  );
};

export default NavBar;

import React from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const display = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Box
      bg="gray.800"
      color="white"
      h={"max-content"}
      gap={"20x"}
      textAlign={"center"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        mx="auto"
        maxW="container.xl"
        p={4}
      >
        <UnorderedList>
          <ListItem>
            <RouterLink to="/inicio">INICIO</RouterLink>
          </ListItem>

          <ListItem>
            <RouterLink to="/productos">TODOS</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/categorias/Abrigo">ABRIGOS</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/categorias/Zapatillas">ZAPATILLAS</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/categorias/Pantalones">PANTALONES</RouterLink>
          </ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem>
            lPuedes visitarnor en la sucursal mas sercana <br></br> de 9:00 a
            12:30 pm y de 5:30 a 10:00 am
          </ListItem>
        </UnorderedList>
        <List display={"flex"} padding={"5px"} gap={"10px"}>
          <FaInstagram />
          <FaTwitter />
          <FaFacebookF />
        </List>
      </Flex>
    </Box>
  );
};

export default Footer;

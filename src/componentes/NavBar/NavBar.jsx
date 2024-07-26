import React from "react";
import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Heading,
  Button,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Heading className="NavBar" boxShadow={"lg"}>
      <Flex
        ml={15}
        gap={3}
        display={{ base: "none", md: "flex" }} // Show this on larger screens
        alignItems="center"
      >
        <Button as={Link} to="/inicio" bg={"transparent"} borderRadius={25}>
          INICIO
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            bg={"transparent"}
            borderRadius={25}
            rightIcon={<IoIosArrowDown />}
          >
            PRODUCTOS
          </MenuButton>
          <MenuList fontSize="md">
            <MenuItem as={Link} to="/productos">
              TODOS
            </MenuItem>
            <MenuItem as={Link} to="/categorias/Abrigo">
              ABRIGOS
            </MenuItem>
            <MenuItem as={Link} to="/categorias/Zapatillas">
              ZAPATILLAS
            </MenuItem>
            <MenuItem as={Link} to="/categorias/Pantalones">
              PANTALONES
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Text
        className="text-niceskin"
        textShadow="1px 1px rgb(231, 235, 197)"
        color={"#030301"}
        mr="200px"
        fontSize="xl"
      >
        <Link to="/inicio">!NiceSkin¡</Link>
      </Text>
      <CartWidget />

      {/* menu de Hamburguesa */}
      <Box display={{ base: "block", md: "none" }} position="relative">
        <Button ref={btnRef} bg="gray.800" color={"#fff"} onClick={onOpen}>
          <HamburgerIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column" gap={4}>
                <Button variant="link" as={Link} to="/inicio" onClick={onClose}>
                  INICIO
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="link"
                    rightIcon={<IoIosArrowDown />}
                  >
                    PRODUCTOS
                  </MenuButton>
                  <MenuList fontSize="md">
                    <MenuItem as={Link} to="/productos">
                      TODOS
                    </MenuItem>
                    <MenuItem as={Link} to="/categorias/Abrigo">
                      ABRIGOS
                    </MenuItem>
                    <MenuItem as={Link} to="/categorias/Zapatillas">
                      ZAPATILLAS
                    </MenuItem>
                    <MenuItem as={Link} to="/categorias/Pantalones">
                      PANTALONES
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Button variant="link" onClick={onClose}>
                  <CartWidget display={{ base: "block", md: "none" }} />
                </Button>
              </Flex>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Heading>
  );
};

export default NavBar;

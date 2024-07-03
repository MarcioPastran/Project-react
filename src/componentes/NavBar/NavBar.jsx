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
} from "@chakra-ui/react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="NavBar">
      <Heading>
        <Link to={"/"}>!NiceSkin¡</Link>
      </Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaRegArrowAltCircleDown />}>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/categorias/coat">Abrigos</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/feet">Zapatillas</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/trousers">Pantalones</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </header>
  );
};

export default NavBar;

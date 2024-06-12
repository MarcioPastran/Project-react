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

const NavBar = () => {
  return (
    <header className="NavBar">
      <Heading>!NiceSkin¡</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaRegArrowAltCircleDown />}>
          Filter
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </header>
  );
};

export default NavBar;

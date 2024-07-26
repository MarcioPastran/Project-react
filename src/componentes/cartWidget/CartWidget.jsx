import { Flex, Badge } from "@chakra-ui/react";
import React, { useContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(Context);
  return (
    <Flex mr={10}>
      <Link to={"/cart"}>
        <HiOutlineShoppingBag />
      </Link>
      <Flex>
        <Badge bg={"transparent"} pos={"absolute"} top={"14px"}>
          {getQuantity()}
        </Badge>
      </Flex>
    </Flex>
  );
};

export default CartWidget;

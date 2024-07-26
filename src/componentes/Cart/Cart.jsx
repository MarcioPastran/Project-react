import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Flex,
  Heading,
  Text,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";

export const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(Context);

  if (cart.length === 0) {
    return (
      <Flex
        className="body"
        direction={"column"}
        textAlign={"center"}
        justify={"center"}
        align={"center"}
        h={"100vh"}
      >
        <Text color={"#6c757d"}>Todavia no agregaste productos al carrito</Text>
        <ChakraLink as={Link} to="/productos" color={"#6c757d"}>
          Ver Productos
        </ChakraLink>
      </Flex>
    );
  } else {
    return (
      <TableContainer className="body" textAlign={"center"}>
        <Box mx="auto" mt="100px" w="80%">
          <Heading fontSize={"3md"} mb={"20px"} textTransform={"uppercase"}>
            Compras
          </Heading>
          <Table
            variant="striped"
            colorScheme="blackAlpha"
            bg="white"
            boxShadow="lg"
          >
            <Thead>
              <Tr>
                <Th>Producto</Th>
                <Th>Cantidad</Th>
                <Th>Precio</Th>
                <Th>Subtotal</Th>
                <Th isNumeric></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((prod) => (
                <Tr key={prod.id}>
                  <Td>{prod.nombre}</Td>
                  <Td>{prod.quantity}</Td>
                  <Td>{prod.price}</Td>
                  <Td>{prod.price * prod.quantity}</Td>
                  <Td>
                    {
                      <Button
                        onClick={() => removeItem(prod.id)}
                        bg={"transparent"}
                      >
                        <AiTwotoneDelete />
                      </Button>
                    }
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          bg="gray.800"
          color={"#fff"}
          w={"80%"}
          h={"70px"}
          m={"auto"}
          mb={"50px"}
          gap={"15px"}
        >
          <Heading>Total: {getTotalPrice()}</Heading>
          <Button onClick={() => clearCart()}>
            Vaciar carrito <AiTwotoneDelete />
          </Button>
          <Button as={Link} to={"/checkout"}>
            Finalizar compra
          </Button>
        </Flex>
      </TableContainer>
    );
  }
};

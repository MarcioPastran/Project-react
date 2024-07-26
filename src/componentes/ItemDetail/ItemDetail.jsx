import React, { useContext, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Image,
  Button,
  Text,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import ItemCount from "../itemCount/itemCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({
  nombre,
  imageUrl,
  descripcion,
  price,
  stock,
  id,
  category,
}) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(Context);

  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      price,
    };
    setQuantity(quantity);
    addItem(item, quantity);
    toast.success(`Agregaste ${quantity} producto al carrito`);
  };

  return (
    <Card
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="fit-content"
      h="70vh"
      m="20px"
      borderRadius="20px"
      boxShadow={"3px 5px 5px 3px rgba(0, 0, 0, 0.493)"}
    >
      <Flex>
        <Text className="categoria-et">{category}</Text>

        <Stack
          textAlign="start"
          w={"fit-content"}
          h={"fit-content"}
          mt={"70px"}
          mr={"50px"}
        >
          <CardBody>
            <Heading fontSize="3xl">{nombre}</Heading>

            <Text w={"300px"}>{descripcion}</Text>
            <Text color="blue.600">${price}</Text>
          </CardBody>

          <Flex justifyContent="start" ml={5}>
            {quantity === 0 ? (
              <ItemCount
                initialValue={1}
                stock={stock}
                onAdd={onAdd}
                variant="solid"
                colorScheme="blue"
                size="md"
              />
            ) : (
              <Flex gap={4}>
                <ChakraLink as={Link} to="/cart">
                  Ir al carrito
                </ChakraLink>
                <ChakraLink as={Link} to="/productos">
                  Seguir comprando
                </ChakraLink>
              </Flex>
            )}
          </Flex>
        </Stack>
        <Flex h={"70vh"} className="image-detai">
          <Image
            mt={"50px"}
            objectFit="cover"
            src={imageUrl}
            alt={nombre}
            w={"300px"}
            h={"300px"}
            filter={" drop-shadow(-5px 5px 3px rgba(0, 0, 0, 0.616))"}
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default ItemDetail;

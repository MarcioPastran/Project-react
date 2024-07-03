import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import ItemCount from "../itemCount/itemCount";
import { ToastContainer, toast } from "react-toastify";

const ItemDetail = ({ nombre, imageUrl, descripcion, price, stock }) => {
  const onAdd = (quantity) => {
    toast(`Agregaste ${quantity} al carrito`);
  };
  return (
    <Card maxW="sm" className="card">
      <CardBody>
        <Image
          src={imageUrl}
          alt={descripcion}
          borderRadius="lg"
          w={"300px"}
          h={"300px"}
          objectFit={"cover"}
          className="img-card"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{nombre}</Heading>
          <Text>{descripcion}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="30">
          <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
        </ButtonGroup>
      </CardFooter>
      <ToastContainer />
    </Card>
  );
};

export default ItemDetail;

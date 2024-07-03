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
import { Link } from "react-router-dom";

const item = ({ nombre, imageUrl, price, descripcion, stock, id }) => {
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
          <Button variant="ghost" colorScheme="blue">
            <Link to={`producto/${id}`}>Ver detalle</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default item;

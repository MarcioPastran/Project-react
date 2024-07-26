import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const item = ({ nombre, imageUrl, price, descripcion, id }) => {
  return (
    <Card className="card">
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
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup w={"100%"} justifyContent={"center"}>
          <Button
            variant="ghost"
            colorScheme="blue"
            textAlign={"center"}
            w={"90%"}
            borderRadius={"24px"}
          >
            <Link to={`/producto/${id}`}>Ver detalle</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default item;

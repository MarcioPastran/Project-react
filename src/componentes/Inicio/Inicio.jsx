import React from "react";
import {
  Image,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@chakra-ui/icons";
import image12 from "../../assets/img/zapatilla-deporte-hombre-amarillo-brillante-rayas-azules-flota-aire-idea-deporte-estilo-composicion-tendencia-minimalista_594847-215-fotor-bg-remover-2024071734815.png";
import image13 from "../../assets/img/1000_F_749147174_zCzcX6Je6lrBmyFmWorxPbYvKEKovzqR-fotor-bg-remover-202407221210.png";
import Galleria from "../Galleria/galleria";

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className="body">
      <Flex justifyContent={"center"} alignContent={"center"}>
        <Flex
          className="contenedor-inicio"
          justifyContent={"center"}
          alignContent={"center"}
          p={"100px"}
          gap={"100px"}
          wrap={"wrap"}
        >
          <Box
            w={"fit-content"}
            h={"fit-content"}
            backdropFilter={"blur(20px)"}
            backgroundColor={"rgba(255, 255, 255, 0.5)"}
            textAlign={"center"}
            border={"2px solid #fff"}
            borderRadius={"24px"}
          >
            <Text fontSize="md" mt={"10px"} w={"250px"}>
              Hacemos envíos a todo el país, próximamente internacionales
            </Text>
            <Button
              borderRadius={"24px"}
              size="md"
              color={"#fff"}
              bg="gray.800"
              mt="24px"
              mb={"10px"}
              onClick={() => navigate("/productos")}
            >
              Explora Productos
            </Button>
          </Box>
          <Box
            bg={"#fff"}
            w={"350px"}
            h={"350px"}
            borderRadius={"50%"}
            boxShadow={"lg"}
            pr={"10px"}
          >
            <Image
              src={image12}
              alt="Zapatilla"
              filter={"drop-shadow(-5px 5px 3px rgba(0, 0, 0, 0.616))"}
              className="image-init"
            />
          </Box>
          <Flex>
            <Flex
              gap={"5px"}
              direction={{ base: "row", md: "column" }}
              wrap="wrap"
              justifyContent={"center"}
            >
              <Card
                w={"200px"}
                h={"200px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"0px 0px 55px 55px"}
                boxShadow={"lg"}
              >
                <Image
                  src={image13}
                  alt="buzo negro"
                  w={"100px"}
                  h={"100px"}
                  borderRadius="50%"
                  objectFit="cover"
                  filter={"drop-shadow(-3px 3px 3px rgba(0, 0, 0, 0.616))"}
                />
                <Stack mt="6">
                  <Heading size="md">Algodón 100%</Heading>
                </Stack>
              </Card>
              <Card
                w={"200px"}
                h={"200px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"0px 0px 55px 55px"}
                boxShadow={"lg"}
              >
                <CheckCircleIcon
                  w={"100px"}
                  h={"100px"}
                  borderRadius="50%"
                  objectFit="cover"
                  filter={"drop-shadow(-3px 3px 3px rgba(0, 0, 0, 0.616))"}
                />
                <Stack mt="6">
                  <Heading size="md">Calidad 100%</Heading>
                </Stack>
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Galleria />
    </div>
  );
};

export default Inicio;

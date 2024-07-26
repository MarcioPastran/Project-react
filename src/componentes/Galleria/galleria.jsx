import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase"; //importo firebase en el componente
import { collection, getDocs } from "firebase/firestore"; //impporto las funciones de firestore
import Slider from "react-slick"; // Importo el componente Slider de react-slick
import "slick-carousel/slick/slick.css"; //Estilos de Slick iporte los estilos predeterminados para el slider.
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import "./galleria.css";
const galleria = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const imageUrl = querySnapshot.docs.map((doc) => doc.data().imageUrl);
        setImages(imageUrl);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // para auto-reproducción
    autoplaySpeed: 3000, // duración de cada slide en ms
    arrows: true, // para mostrar las flechas de navegación
  };
  return (
    <Flex
      className="galleria-container"
      boxShadow="lg"
      flexWrap="wrap"
      mb={"20px"}
    >
      <Slider {...settings}>
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="contenedor-img-gallery">
              <Image
                src={image}
                alt={`Slide ${index}`}
                objectFit="cover"
                w="100%"
                h="100%"
                p={"10px"}
              />
            </div>
          ))
        ) : (
          <div>Imagen no visible</div>
        )}
      </Slider>
      <Box
        textAlign="center"
        justifyContent="center"
        alignContent="center"
        pt={"30px"}
      >
        <Heading as="h2" size="md">
          Explora Nuestros Productos
        </Heading>
        <Text>
          Prueba lo mejor de la moda con <br /> la mejor calidad del mercado
        </Text>
      </Box>
    </Flex>
  );
};

export default galleria;

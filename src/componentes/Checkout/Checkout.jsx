import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Stack,
  InputLeftElement,
  InputGroup,
  Button,
  Text,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
import {
  addDoc,
  Timestamp,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import Context from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatEmail: "",
    phone: "",
  });
  const [errors, setError] = useState([]);
  const { cart, getTotalPrice, clearCart } = useContext(Context);
  const navigate = useNavigate();
  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };
  const validateForm = () => {
    const errors = {};
    if (!user.name) {
      errors.name = "tienes que agregar un nombre";
    } else if (user.name.length < 5 || user.name.length > 15) {
      errors.name =
        "El nombre no es valido debe tener al menos 5 caracteres y un maximo de 15";
    }
    if (!user.email) {
      errors.email = "tienes que ingresar un email";
    } else if (!/\S+@+\S+\.\S+/.test(user.email)) {
      errors.email = "El email no es valido";
    }
    if (user.repeatEmail !== user.email) {
      errors.repeatEmail = "El email no coinside";
    }
    if (!user.phone) {
      errors.phone = "Debes ingresar un número de teléfono";
    } else if (!/^\d{10}$/.test(user.phone)) {
      errors.phone = "El número de teléfono no es válido";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const getOrder = async () => {
    if (!validateForm()) {
      return;
    }
    if (cart.length === 0) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El carrito está vacío",
        timer: "2000",
        confirmButtonColor: "#cdcdcd",
      });
      return;
    }
    const orderCollection = collection(db, "orders");
    try {
      const order = {
        buyer: user,
        cart: cart,
        total: getTotalPrice(),
        fechaDeCompra: Timestamp.now(),
      };
      for (const item of cart) {
        const producctRef = doc(db, "productos", item.id);
        const productDoc = await getDoc(producctRef);
        const currentStock = productDoc.data().stock;
        if (currentStock <= item.quantity) {
          Swal.fire(
            `No hay stock suficiente de ${item.nombre} para hacer la compra`
          );
        } else {
          await updateDoc(producctRef, {
            stock: currentStock - item.quantity,
          });
        }
      }
      const orderRef = await addDoc(orderCollection, order);
      clearCart();
      await Swal.fire({
        title: `¡Gracias por tu compra!`,
        text: `El número de orden es: ${orderRef.id}`,
        icon: "success",
        timer: 2000,
        confirmButtonColor: "#cdcdcd",
      });
      navigate("/productos");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <Flex
      p={"100px"}
      alignContent={"center"}
      justifyContent={"center"}
      className="body"
    >
      {" "}
      <Stack
        spacing={4}
        borderRadius={"20px"}
        p={"30px"}
        bg={"#fff"}
        w={"350px"}
        h={"fit-content"}
        textAlign={"center"}
      >
        <InputGroup flexDir={"column"}>
          <InputLeftElement pointerEvents="none">
            <Avatar
              size="2xs"
              src="https://bit.ly/broken-link"
              color="gray.300"
            />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Nombre Completo"
            borderRadius={"20px"}
            name="name"
            onChange={updateUser}
          />
          <Text fontSize={"12px"} color={"red.500"}>
            {errors.name}
          </Text>
        </InputGroup>
        <InputGroup flexDir={"column"}>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Email"
            borderRadius={"20px"}
            name="email"
            onChange={updateUser}
          />
          <Text fontSize={"12px"} color={"red.500"}>
            {errors.email}
          </Text>
        </InputGroup>
        <InputGroup flexDir={"column"}>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Repetir Email"
            borderRadius={"20px"}
            name="repeatEmail"
            onChange={updateUser}
          />
          <Text fontSize={"12px"} color={"red.500"}>
            {errors.repeatEmail}
          </Text>
        </InputGroup>
        <InputGroup flexDir={"column"}>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Numero de Telefono"
            borderRadius={"20px"}
            name="phone"
            onChange={updateUser}
          />
          <Text fontSize={"12px"} color={"red.500"}>
            {errors.phone}
          </Text>
        </InputGroup>
        <Button color="blue.300" onClick={getOrder}>
          Finalizar compra
        </Button>
      </Stack>
    </Flex>
  );
};

export default Checkout;

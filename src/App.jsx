import { useState } from "react";
import "./App.css";
import ItemListContainer from "./componentes/itemListContainer/itemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer title="Welcome To The !NiceSkin¡" />
    </ChakraProvider>
  );
}

export default App;

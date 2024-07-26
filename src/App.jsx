import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inicio from "./componentes/Inicio/Inicio";
import PageNotFound from "./componentes/PageNotFound/PageNotFound";
import ItemListContainer from "./componentes/itemListContainer/itemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { CartContextProvider } from "./context/CartContext";
import { Cart } from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/categorias/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/producto/:productoId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;

import "./App.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/itemListContainer/itemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./componentes/PageNotFound/PageNotFound";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title={"Bienvenidos a !NiceSkin¡"} />}
          />
          <Route
            path="/categorias/:categoryId"
            element={<ItemListContainer title={"Bienvenidos a !NiceSkin¡"} />}
          />
          <Route
            path="producto/:productoId"
            element={<ItemDetailContainer />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <NavBar />
        <ItemListContainer title="Welcome To The !NiceSkin¡" /> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

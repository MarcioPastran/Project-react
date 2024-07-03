import React, { useEffect } from "react";
import { useState } from "react";
import { getProduct, getProductByCategory } from "../../data/asyncMock";
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
const itemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const dataProductos = categoryId
      ? getProductByCategory(categoryId)
      : getProduct();
    dataProductos
      .then((prod) => setProductos(prod))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);
  return (
    <div>
      <h1 className="title">{title}</h1>
      {loading ? (
        <div className="contenedor-load">
          <BounceLoader color=" #c3c48d91" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default itemListContainer;

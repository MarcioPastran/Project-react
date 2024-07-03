import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getProductById } from "../../data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { BounceLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productoId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductById(productoId)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="contenedor-producto">
      {loading ? (
        <div className="contenedor-load">
          <BounceLoader color=" #c3c48d91" />
        </div>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { BounceLoader } from "react-spinners";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productoId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const queryRef = doc(db, "productos", productoId);
      const responce = await getDoc(queryRef);
      const newItem = {
        ...responce.data(),
        id: responce.id,
      };
      setProduct(newItem);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div className="contenedor-producto body">
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

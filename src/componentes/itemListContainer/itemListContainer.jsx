import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const itemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const coleccion = collection(db, "productos");
      const queryRef = !categoryId
        ? coleccion
        : query(coleccion, where("category", "==", categoryId));
      const responce = await getDocs(queryRef);
      const products = responce.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id,
        };
        return newItem;
      });
      setProductos(products);
      setLoading(false);
    };
    getData();
  }, [categoryId]);
  return (
    <div className="body">
      <h1 className="title">{title}</h1>
      {loading ? (
        <div className="contenedor-load">
          <BounceLoader color=" #cecece" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default itemListContainer;

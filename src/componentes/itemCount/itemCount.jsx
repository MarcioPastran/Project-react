import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

const itemCount = ({ initialValue, stock, onAdd }) => {
  const [count, setCount] = useState(initialValue);
  const incrementar = () => {
    count < stock && setCount(count + 1);
  };
  const decrementar = () => {
    count > initialValue && setCount(count - 1);
  };
  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>
      <Button onClick={() => onAdd(count)}>Agregar la carrito</Button>
    </div>
  );
};

export default itemCount;

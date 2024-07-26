import React, { useState } from "react";
import { Button, ButtonGroup, Flex, IconButton } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { GrSubtract } from "react-icons/gr";

const ItemCount = ({ initialValue, stock, onAdd }) => {
  const [count, setCount] = useState(initialValue);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > initialValue) {
      setCount(count - 1);
    }
  };

  return (
    <Flex gap={2}>
      <ButtonGroup size="sm" isAttached variant="outline">
        <IconButton
          variant="solid"
          bg="gray.800"
          color={"#fff"}
          size="sm"
          aria-label="Restar"
          onClick={decrementar}
          icon={<GrSubtract />}
        />
        <Button variant="solid" bg="gray.800" color={"#fff"} size="sm">
          {count}
        </Button>
        <IconButton
          variant="solid"
          bg="gray.800"
          color={"#fff"}
          size="sm"
          aria-label="Sumar"
          onClick={incrementar}
          icon={<FaPlus />}
        />
      </ButtonGroup>
      <Button
        variant="solid"
        bg="gray.800"
        color={"#fff"}
        size="sm"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </Button>
    </Flex>
  );
};

export default ItemCount;

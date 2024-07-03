import React from "react";
import Item from "../item/item";
const itemList = ({ productos }) => {
  return (
    <div className="card-content">
      {productos.map((prod) => (
        <div key={prod.id}>
          <Item {...prod} />
        </div>
      ))}
    </div>
  );
};

export default itemList;

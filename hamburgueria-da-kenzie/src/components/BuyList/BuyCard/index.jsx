import React from "react";
import { StyledBuyCard } from "./styles";

export const BuyCard = ({ item, removeItem }) => {
  return (
    <StyledBuyCard>
      <div>
        <img src={item.img} alt="" />
      </div>
      <div className="separator">
        <h5>{item.name}</h5>
        <small>{item.category}</small>
      </div>
      <button onClick={() => removeItem(item.id)}>Remover</button>
    </StyledBuyCard>
  );
};

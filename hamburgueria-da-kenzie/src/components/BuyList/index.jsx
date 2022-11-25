import React from "react";

import { TotalValue } from "./TotalValue";
import { BuyListHeader } from "./BuyHeader";
import { BuyCard } from "./BuyCard";
import { StyledBuysList } from "./styles";

export const BuyList = ({ selectedList, removeItem }) => {
  return (
    <StyledBuysList>
      <BuyListHeader />
      {selectedList.length > 0 ? (
        <>
          {selectedList.map((item) => (
            <BuyCard item={item} key={item.id} removeItem={removeItem} />
          ))}
          <TotalValue selectedList={selectedList} />
        </>
      ) : (
        <h3>Você ainda não tem itens no carrinho</h3>
      )}
    </StyledBuysList>
  );
};

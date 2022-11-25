import { useState } from "react";

import { TotalValue } from "./TotalValue";
import { BuyListHeader } from "./BuyHeader";
import { BuyCard } from "./BuyCard";
import { StyledBuysList } from "./styles";

export const BuyList = (selectedItens) => {
  return (
    <StyledBuysList>
      <BuyListHeader />
      {selectedItens.length ? (
        <>
          {selectedItens.map((item) => (
            <BuyCard item={item} />
          ))}
          <TotalValue />
        </>
      ) : (
        <h3>Você ainda não tem itens no carrinho</h3>
      )}
    </StyledBuysList>
  );
};

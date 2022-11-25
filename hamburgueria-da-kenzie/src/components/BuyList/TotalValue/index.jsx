import { StyledTotalValue } from "./styles";
import { useState } from "react";

export const TotalValue = () => {
  const [totalValue, setTotal] = useState(0);

  return (
    <StyledTotalValue>
      <div>
        <p>
          Total
          <span>
            {totalValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <button>Remover Todos</button>
      </div>
    </StyledTotalValue>
  );
};
